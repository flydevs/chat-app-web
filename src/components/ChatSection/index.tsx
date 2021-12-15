import React, { useContext, useState, useEffect } from 'react';
import "./ChatSection.scss"
import ChatHeader from './components/ChatHeader/ChatHeader';
import ChatBody from './components/ChatBody/ChatBody';
import { FiPaperclip } from "react-icons/fi";
import { IoIosPaperPlane, IoIosBookmark } from "react-icons/io";
import { ConversationsContext } from '../../stores/ConversationsContext';
import { getMessages, sendMessage } from '../../utils/back/chatutils';
import { message, userProfile } from "../../utils/interfaces";
import { AuthContext } from '../../stores/AuthContext';

function ChatSection() {
    const selected = useContext(ConversationsContext).selected
    const userinfo = useContext(AuthContext)
    const conversation = selected?.conversation
    const [messages, setMessages] = useState<message[]>([])

    const makeHeader = () => {
        
        if (selected?.private){
            let user_string = localStorage.getItem(selected.participants[0].user_uuid.uuid)
            let user:userProfile = JSON.parse(user_string!)
            return (<ChatHeader profileName={(user.first_name! + user.last_name!)} profileImg={user.avatar_url!} status="Online"
            statusBubble="#68D391"/>)
        } else{
            return (<ChatHeader profileName={conversation!.name} status="Online" profileImg={conversation!.avatar_url} statusBubble="#68D391" />)
        }
    }

    const handleSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter'){
            sendMessage(userinfo.userInfo,e.currentTarget.value, conversation?.uuid!)
            e.currentTarget.value = ""
        }
    }

    useEffect(()=>{
        const func = async() => {
            if (conversation?.uuid.uuid != undefined){
                const messages = await getMessages(userinfo.userInfo,conversation?.uuid.uuid)
                setMessages(messages)
            }
        }
        func()
    },[conversation])
    return (
        <div className="chatOverlay">
            {conversation ? makeHeader(): <ChatHeader profileName="Florencio Dorrance" status="Online" statusBubble="#68D391" profileImg={`https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg`}/>}
            <ChatBody messages={messages} />
            <div className="chatOverlay__footer">
                <FiPaperclip className="chatOverlay__footer__paperClip" />
                <div className="chatOverlay__footer__textInputContainer">
                    <input type="text" placeholder="Type a message" className="chatOverlay__footer__textInputContainer__textInput" onKeyPress={handleSendMessage}></input>
                    <IoIosPaperPlane size={20} color={'#615EF0'} className="chatOverlay__footer__textInputContainer__sendMessage" />
                </div>
            </div>
        </div>
    )
}

export default ChatSection
