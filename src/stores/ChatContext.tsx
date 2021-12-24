import { message } from "../utils/interfaces";
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { ConversationsContext } from "./ConversationsContext";
import { getMessages } from "../utils/back/chatutils";
import { AuthContext } from "./AuthContext";
import { CheckIfScrollBottom, SetScrolltoBottom } from "../components/ChatSection/components/ChatBody/components/scrolling/scrolling";

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

    const updateMessages = async (existing_messages:message[]) => {
        const quant_msgs = existing_messages.length
        let overall_messages:message[] = []
         if (quant_msgs != 0){
            const new_messages = await getMessages(AuthCtx.userInfo, selected!.conversation.uuid.uuid, "?after="+existing_messages[quant_msgs-1].created_at)
            overall_messages.push.apply(overall_messages, existing_messages)
            overall_messages.push.apply(overall_messages, new_messages)
        } else{
            overall_messages = await getMessages(AuthCtx.userInfo, selected!.conversation.uuid.uuid, "")
        }
        //scrolling
        const ScrollingIsBottom= CheckIfScrollBottom()
        //---------
        setTimeoutVariable(null)
        setMessages(overall_messages)
        //scrolling
        if (ScrollingIsBottom){ SetScrolltoBottom()}
        //---------
    }
    useEffect(() => {
        const func = async () => {
            if (timeout != null){
               return
            } else {
            setTimeoutVariable(setTimeout(() => {updateMessages(messages)}, 3000))
            }
        }
        func()
    }, [messages])

    useEffect(() => {
        const func = async() => {
            await updateMessages([])
            //scrolling
            SetScrolltoBottom()
            //-------
        }
        if (selected != undefined){
        if (timeout != null){
            clearTimeout(timeout)
            setTimeoutVariable(null)
        }
        if (!("makeElement" in selected)){
            func()
        }
        }
    }, [selected])
    return(
        <ChatContext.Provider value={{messages, setMessages, timeout, setTimeoutVariable}}>
            {children}
        </ChatContext.Provider>
    );
};

export { ChatProvider, ChatContext };