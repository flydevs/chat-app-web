import "./ChatBody.scss";
import React from 'react';
import { message } from "../../../../utils/interfaces";
import {MessagesList} from "./MessagesList"



const ChatBody= () => {
    return (
        <div className="chatContainer">
            <div className="chatContainer__chatBox"></div>
            <MessagesList/>
        </div>
    )
}

export default ChatBody;