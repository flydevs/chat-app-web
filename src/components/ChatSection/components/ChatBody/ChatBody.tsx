import "./ChatBody.scss";
import React, { useContext, useEffect } from 'react';
import { message } from "../../../../utils/interfaces";
import {MessagesList} from "./MessagesList"
import { ChatContext } from "../../../../stores/ChatContext";
import { AuthContext } from "../../../../stores/AuthContext";
import { getMessages } from "../../../../utils/back/chatutils";
import { ConversationsContext } from "../../../../stores/ConversationsContext";

const ChatBody= () => {
    const ChatCxt = useContext(ChatContext)
    const ConvoCtx = useContext(ConversationsContext)
    const AuthCxt = useContext(AuthContext)
        const fetchOlderMessage = (e: React.UIEvent<HTMLElement>)=> {
            if (e.currentTarget.scrollTop == 0){
                const func = async () => {
                    if (ChatCxt.messages.length > 0){
                        if (ChatCxt.timeout != null){
                            clearTimeout(ChatCxt.timeout)
                            ChatCxt.setTimeoutVariable(null)
                        }
                        const last_message = ChatCxt.messages[0].created_at;
                        const older_messages =await getMessages(AuthCxt.userInfo, ConvoCtx.selected?.conversation.uuid.uuid!, "?before=" + last_message);
                        older_messages.push.apply(older_messages, ChatCxt.messages);
                        
                        ChatCxt.setMessages(older_messages);
                };
                };
                func();
            }
        }
    return (
        <div onScroll={fetchOlderMessage} className="chatContainer">
            <div className="chatContainer__chatBox"></div>
            <MessagesList/>
        </div>
    )
}

export default ChatBody;