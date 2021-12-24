import React, { useContext, useState, useEffect } from 'react';
import "./ChatSection.scss"
import { ChatHeader,NoChatSelected,NotLoggedHeader } from './components/ChatHeader/ChatHeader';
import ChatBody from './components/ChatBody/ChatBody';
import { FiPaperclip } from "react-icons/fi";
import { IoIosPaperPlane, IoIosBookmark } from "react-icons/io";
import { ConversationsContext } from '../../stores/ConversationsContext';
import { getMessages, sendMessage } from '../../utils/back/chatutils';
import { message, storageUsers, userProfile, uuid } from "../../utils/interfaces";
import { AuthContext } from '../../stores/AuthContext';
import { createConversRequest } from '../../utils/back/conversutils'

function ChatSection() {
    const selected = useContext(ConversationsContext).selected
    const userinfo = useContext(AuthContext)
    const conversation = selected?.conversation

    let users:storageUsers = {}
    const users_string = localStorage.getItem("users")
    if (users_string != null) {
        users= JSON.parse(users_string)
    }

    const makeHeader = () => {
        if (selected?.private){
            let user:userProfile = users[selected.participants[0].user_uuid.uuid]
            return (<ChatHeader profileName={(user.first_name!+ " " + user.last_name!)} profileImg={user.avatar_url!} status="Online"
            statusBubble="#68D391"/>)
        } else{
            return (<ChatHeader profileName={conversation!.name!} status="Online" profileImg={conversation!.avatar_url!} statusBubble="#68D391" />)
        }
    }

    const handleSendMessage = (e: HTMLInputElement) => {
        if ("new" in selected!){
            let participants: uuid[] = []
            selected.participants.forEach((participant) => {participants.push(participant.user_uuid)})
            createConversRequest(userinfo.userInfo,e.value, conversation?.type!, participants, conversation?.name, conversation?.avatar_url)
        } else {
            sendMessage(userinfo.userInfo,e.value, conversation?.uuid!)
        }
        e.value = ""
    }

    return (
        <div className="chatOverlay">
            {userinfo.logged ? (conversation ? makeHeader(): <NoChatSelected/>) : <NotLoggedHeader/> }
            <ChatBody/>
            <div className="chatOverlay__footer">
                <FiPaperclip className="chatOverlay__footer__paperClip" />
                <div className="chatOverlay__footer__textInputContainer">
                    <input type="text" placeholder="Type a message" className="chatOverlay__footer__textInputContainer__textInput" onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key == 'Enter') {
                            handleSendMessage(e.currentTarget)
                        }
  
                        }} id='sendMessage'></input>
                    <IoIosPaperPlane size={20} color={'#615EF0'} className="chatOverlay__footer__textInputContainer__sendMessage" onClick={()=>{handleSendMessage(document.getElementById("sendMessage")! as HTMLInputElement)}} />
                </div>
            </div>
        </div>
    )
}

export default ChatSection
