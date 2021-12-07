import "./ChatBody.scss";
import React from 'react';
import MessageRecived from "./messageRecived/messageRecived";
import MessageSent from "./messageSent/messageSent";
import { message } from "../../../../utils/interfaces";
import {MessagesList} from "./MessagesList"

type MessageProps = {
    messages: message[]
}

const ChatBody= ({messages}: MessageProps) => {
    return (
        <div className="chatContainer">
            <div className="chatContainer__chatBox"></div>
            <MessagesList messages={messages}/>
        </div>
    )
}

export default ChatBody;