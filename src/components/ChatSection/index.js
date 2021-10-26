import React from 'react';
import "./ChatSection.scss"
import ChatHeader from './components/ChatHeader/ChatHeader';
import ChatBody from './components/ChatBody/ChatBody';


function ChatSection() {
    return (
        <div className="chatOverlay">
            <ChatHeader profileName="Florencio Dorrance" status="Online" statusBubble="#68D391" profileImg={`https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg`} />
            <ChatBody />
        </div>
    )
}

export default ChatSection
