import React from 'react';
import "./ChatSection.scss"
import ChatHeader from './components/ChatHeader/ChatHeader';
import ChatBody from './components/ChatBody/ChatBody';


function ChatSection() {
    return (
        <div className="chatOverlay">
            <ChatHeader />
            <ChatBody />
        </div>
    )
}

export default ChatSection
