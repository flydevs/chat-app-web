import React, { useContext, useState, useEffect } from 'react';
import "./ChatSection.scss"
import { ChatHeader,NoChatSelected,NotLoggedHeader } from './components/ChatHeader/ChatHeader';
import ChatBody from './components/ChatBody/ChatBody';
import { FiPaperclip } from "react-icons/fi";
import { IoIosPaperPlane, IoIosBookmark } from "react-icons/io";
import { ConversationsContext } from '../../stores/ConversationsContext';
import { getMessages, sendMessage } from '../../utils/back/chatutils';
import { CreateDummyUserProfile, message, NewConvo, storageUsers, userProfile, uuid } from "../../utils/interfaces";
import { AuthContext } from '../../stores/AuthContext';
import { createConversRequest } from '../../utils/back/conversutils'
import { getUsers } from '../../utils/back/usersutils';

function ChatSection() {
    const ConvCtx = useContext(ConversationsContext)
    const selected = ConvCtx.selected
    const userinfo = useContext(AuthContext)
    const conversation = selected?.conversation
    const users = ConvCtx.users

    const [replace, setReplace] = useState<string | null>(null)

    const makeHeader = () => {
        const newConvoProfileManaging = (convo:NewConvo):userProfile =>{
                //if NewConvo checks whether the user is inside the ConversationContext users object. 
                if (users.hasOwnProperty(convo.participants[0].user_uuid.uuid)) {
                    return users[convo.participants[0].user_uuid.uuid]
                } else {
                    let dummy_user = CreateDummyUserProfile({uuid: convo.participants[0].user_uuid.uuid, first_name: "retrieving user info..."});
                    getUsers(userinfo.userInfo, [convo.participants[0].user_uuid]).then((retrieved_user) =>{
                        let new_user = retrieved_user![convo.participants[0].user_uuid.uuid];
                        
                        let name_doc = document.getElementById("chatHeaderProfileName") as HTMLParagraphElement;
                        name_doc!.innerHTML = new_user.first_name + ' ' + new_user.last_name
                        
                        let img_doc = document.getElementById("chatHeaderProfileImg") as HTMLImageElement
                        img_doc.src = new_user.avatar_url!
                        
                    })
                    return dummy_user
        }
    }
        if (selected?.private){
            let user:userProfile = !("new" in selected) ? users[selected.participants[0].user_uuid.uuid]: newConvoProfileManaging(selected)
            return (<ChatHeader profileName={(user.first_name!+ " " + user.last_name!)} profileImg={user.avatar_url!} status="Online"
            statusBubble="#68D391"/>)
        } else{
            return (<ChatHeader profileName={conversation!.name!} status="Online" profileImg={conversation!.avatar_url!} statusBubble="#68D391" />)
        }
    }

//If replaced is not null, then the conversation was a "fake" one and a message was sent creating a new conversation.
//This looks for the created conversation.
    useEffect(()=>{
        if (replace !== null) {
            ConvCtx.conversations.forEach((conversation_object) => {
                if (conversation_object.conversation.uuid.uuid == replace) {
                    ConvCtx.setSelected(conversation_object)
                    setReplace(null)
                }
            });
        }
    }, [ConvCtx.conversations])

    const handleSendMessage = (e: HTMLInputElement) => {
        if ("new" in selected!){
            let participants: uuid[] = []
            selected.participants.forEach((participant) => {participants.push(participant.user_uuid)})
            const promise_uuid = createConversRequest(userinfo.userInfo,e.value, conversation?.type!, participants, conversation?.name, conversation?.avatar_url)
            const ReplaceWithCreatedConversation = async () =>{
                let uuid = await promise_uuid
                if (uuid === undefined){
                    return
                }
                setReplace(uuid.uuid)
            };
            ReplaceWithCreatedConversation()
//---------
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
