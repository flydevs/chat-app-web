import { message } from "../utils/interfaces";
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { ConversationsContext } from "./ConversationsContext";
import { getMessages } from "../utils/back/chatutils";
import { AuthContext } from "./AuthContext";

const ChatContext = React.createContext<{
    messages: message[],
    setMessages:(arg0: message[]) => void,
    timeout: NodeJS.Timeout | null,
    setTimeoutVariable:(arg0:NodeJS.Timeout | null)=>void
  }>({
      messages: [],
      setMessages: ([])=>{},
      timeout:null,
      setTimeoutVariable:() => {}
  }
  );

type ChatProps= {
    children: ReactNode;
}
  
const ChatProvider = ({children}:ChatProps) => {
    const ConvoCtx = useContext(ConversationsContext);
    const AuthCtx = useContext(AuthContext);
    const [messages, setMessages] = useState<message[]>([])
    const [timeout, setTimeoutVariable] = useState<NodeJS.Timeout | null>(null)
    const selected = ConvoCtx.selected

    const updateMessages = async () => {
        const quant_msgs = messages.length
        let overall_messages:message[] = []
         if (quant_msgs != 0){
            const new_messages = await getMessages(AuthCtx.userInfo, selected!.conversation.uuid.uuid, "?after="+messages[quant_msgs-1].created_at)
            overall_messages.push.apply(overall_messages, messages)
            overall_messages.push.apply(overall_messages, new_messages)
        } else{
            overall_messages = await getMessages(AuthCtx.userInfo, selected!.conversation.uuid.uuid, "")
        }
        setTimeoutVariable(null)
        setMessages(overall_messages)
    }
    useEffect(() => {
        const func = async () => {
            if (timeout != null){
               return
            } else {
            setTimeoutVariable(setTimeout(() => {updateMessages()}, 3000))
            }
        }
        func()
    }, [messages])

    useEffect(() => {
        const func = async() => {
            await updateMessages()
        }
        if (selected != undefined){
        if (timeout != null){
            clearTimeout(timeout)
            setTimeoutVariable(null)
        }
        func()
        }
    }, [selected])
    /*
    useEffect(()=>{
        if (timeout != undefined){
            clearInterval(timeout)
        }
        let afterparam: string | null = null 
        const func = async () => {
            console.log(afterparam)
            let overall_messages:message[] = []
            if (afterparam != null){
                overall_messages = await getMessages(AuthCtx.userInfo, selected!.conversation.uuid.uuid, "?after="+afterparam)
                overall_messages.push.apply(overall_messages, messages)
                setMessages(overall_messages)
            } else{
                overall_messages = await getMessages(AuthCtx.userInfo, selected!.conversation.uuid.uuid, "")
                setMessages(overall_messages)
            }
                if (overall_messages.length == 0) {
                    afterparam = ""
                }   else {
                    console.log("updated string")
                    afterparam = messages[messages.length-1].uuid.uuid
                }
            }
        if (selected != undefined){
        func()
        setTimeout(setInterval(func, 3000))
        }
    }
    , [selected])
    */
/*
    useEffect(()=>{
        if (messages.length != 0) {
            
        }
    }, [messages])
    */
    return(
        <ChatContext.Provider value={{messages, setMessages, timeout, setTimeoutVariable}}>
            {children}
        </ChatContext.Provider>
    );
};

export { ChatProvider, ChatContext };