import { message } from "../utils/interfaces";
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { ConversationsContext } from "./ConversationsContext";
import { getMessages } from "../utils/back/chatutils";
import { AuthContext } from "./AuthContext";

const ChatContext = React.createContext<{
    messages: message[],
  }>({
      messages: []
  }
  );

type ChatProps= {
    children: ReactNode;
}
  
const ChatProvider = ({children}:ChatProps) => {
    const ConvoCtx = useContext(ConversationsContext);
    const AuthCtx = useContext(AuthContext)
    const [messages, setMessages] = useState<message[]>([])
    const [timeout, setTimeout] = useState<NodeJS.Timeout | null>(null)
    const selected = ConvoCtx.selected

    useEffect(()=>{
        if (timeout != undefined){
            clearInterval(timeout)
        }
        const func = async () => {
            setMessages(await getMessages(AuthCtx.userInfo, selected!.conversation.uuid.uuid))
            }
        
        if (selected != undefined){
        func()
        setTimeout(setInterval(func, 3000))
        }
    }
    , [selected])
    return(
        <ChatContext.Provider value={{messages}}>
            {children}
        </ChatContext.Provider>
    );
};

export { ChatProvider, ChatContext };