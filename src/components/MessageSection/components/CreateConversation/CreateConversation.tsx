import { SearchBar } from "../../../../utils/searchbar/searchbar";
import { useContext, useEffect, useState } from "react";

import "./createconversation.scss";
import { AuthContext } from "../../../../stores/AuthContext";
import { searchContact } from "../../../../utils/back/usersutils";
import { NewConvo, storageUsers, userProfile } from "../../../../utils/interfaces";
import ContactsCard from "../ContactsCard/ContactsCard";
import { ConversationsContext } from "../../../../stores/ConversationsContext";

interface CreateConversationProps {
    turnbackdropoff: () => void
}

const CreateConversation = ({turnbackdropoff}:CreateConversationProps) => {
    const AuthCtx = useContext(AuthContext)
    const ConvoCtx = useContext(ConversationsContext)
    const [search,setSearch] = useState<string>("");
    const [contacts, setContacts] = useState<userProfile[]>([])

    let known_users: storageUsers = {}
    const users_string = localStorage.getItem("users") 
    if (users_string != null){
        known_users = JSON.parse(users_string)
        delete known_users[AuthCtx.userInfo.uuid?.uuid!]
    }

    const select=(user:userProfile) => {
        const user_convo = {uuid: {uuid: "000000"}, user_uuid: AuthCtx.userInfo.uuid!, last_access_uuid: {uuid: "000000"}, created_at: 0}
        let conversation: NewConvo = {
            private: true,
            new: true,
            conversation: {uuid: {uuid: "000000"}, type: 1, created_at: 0},
            user_conversation: user_convo,
            participants:  [{uuid: {uuid: "000000"}, user_uuid: user.uuid, last_access_uuid: {uuid: "000000"}, created_at: 0},user_convo]
        }
        ConvoCtx.setSelected(conversation)
        turnbackdropoff()
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    useEffect(()=>{
        const func = async () => {
            setContacts(await searchContact(AuthCtx.userInfo, search))
        }
        func()
    }, [search])
    return (
        <div className="CreateConvo" >
            <SearchBar message="Search contact" handleSearchChange={handleSearchChange} />    
            {contacts.length > 0 ? contacts.map((contact, i) => {
                return(<ContactsCard
                key={i}
                timeAgo={0}
                name={contact.first_name! + " " + contact.last_name!}
                lastMessage={contact.phone}
                profileImg={contact.avatar_url!}
                unread={0}
                badges={[]}
                selected=""
                toggleSelected={()=>{
                    known_users[contact.uuid.uuid] = contact
                    localStorage.setItem("users", JSON.stringify(known_users))
                    select(contact)
                }}
                />)
            }) : <div>No users.</div>}
            <div style={{height: "10px", width: "100%", backgroundColor: "white"}}/>
            {Object.entries(known_users).map((contact, i) =>{
                  return(<ContactsCard
                    key={i}
                    timeAgo={0}
                    name={contact[1].first_name! + contact[1].last_name!}
                    lastMessage={contact[1].phone}
                    profileImg={contact[1].avatar_url!}
                    unread={0}
                    badges={[]}
                    selected=""
                    toggleSelected={()=>{select(contact[1])}}
                    />)
            })}
        </div>
    )
};

export {CreateConversation};