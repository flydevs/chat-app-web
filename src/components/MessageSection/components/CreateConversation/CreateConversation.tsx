import { SearchBar } from "../../../../utils/searchbar/searchbar";
import React, { ReactNode, useContext, useEffect, useState } from "react";

import "./createconversation.scss";
import { AuthContext } from "../../../../stores/AuthContext";
import { searchContact } from "../../../../utils/back/usersutils";
import { NewConvo, storageUsers, userProfile } from "../../../../utils/interfaces";
import ContactsCard from "../ContactsCard/ContactsCard";
import { ConversationsContext } from "../../../../stores/ConversationsContext";
import { IoIosPeople, IoIosPerson } from "react-icons/io";

interface CreateConversationProps {
    turnbackdropoff: () => void
}

const SelectedContext = React.createContext<{
    select: storageUsers,
    setSelect: (arg0:storageUsers)=>void
}>({
    select:{},
    setSelect: ({})=>{}
});

const CreateConversationWrapper = ({turnbackdropoff}:CreateConversationProps) =>{
    const [select, setSelect] = useState<storageUsers>({})

    return (
    <SelectedContext.Provider value={{select, setSelect}}>
    <CreateConversation turnbackdropoff={turnbackdropoff}/>
    </SelectedContext.Provider>
    )
}


const CreateConversation = ({turnbackdropoff}:CreateConversationProps) =>{
    const [isPrivate, setIsPrivate] = useState<boolean>(true)
    return (
        <div className="CreateConvo">
        {isPrivate ? <SearchContactPrivate turnbackdropoff={turnbackdropoff}/> : <SearchContactGroup/>}
        <div>
            <div className={"CreateConvo__PrivateGroupButtons" + (isPrivate ? " CreateConvo__PrivateGroupButtons__Selected" : "") } onClick={()=>{
                setIsPrivate(true)
            }}>
                <IoIosPerson size={50} color=""/>
            </div>
            <div className={"CreateConvo__PrivateGroupButtons" + (isPrivate ? "" : " CreateConvo__PrivateGroupButtons__Selected") } onClick={()=>{
                setIsPrivate(false)
            }}>
                <IoIosPeople size={50}/>
            </div>
        </div>
        </div>
    )
}

const SearchContactPrivate = ({turnbackdropoff}:CreateConversationProps) => {
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
        <div className="CreateConvo__SearchContact" >
            <SearchBar message="Search contact" handleSearchChange={handleSearchChange} />    
            {contacts.length > 0 ? contacts.map((contact, i) => {
                return poblateContactsCard(i, contact, select, undefined)
            }) : <div className="CreateConvo__SearchContact__NoUsers"><p>No users.</p></div>}
            <div className="CreateConvo__SearchContact__KnownUsers"/>
            {Object.entries(known_users).map((contact, i) =>{
                  return poblateContactsCard(i, contact[1], select, undefined)
            })}
        </div>
    )
};

const SearchContactGroup = () => {
    const AuthCtx = useContext(AuthContext)
    const SelectedCtx= useContext(SelectedContext)
    const [search,setSearch] = useState<string>("");
    const [contacts, setContacts] = useState<userProfile[]>([])

    let known_users: storageUsers = {}
    const users_string = localStorage.getItem("users") 
    if (users_string != null){
        known_users = JSON.parse(users_string)
        delete known_users[AuthCtx.userInfo.uuid?.uuid!]
    }

    const select=(user:userProfile) => {
       let list_selected = SelectedCtx.select
       list_selected[user.uuid.uuid] = user
       SelectedCtx.setSelect(list_selected)
    };

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
        <div className="CreateConvo__SearchContact" >
            <SearchBar message="Search contact" handleSearchChange={handleSearchChange} />    
            {Object.entries(SelectedCtx.select).map((contact, i) => {
                return (
                <div className="CreateConvo__GroupContactSelected">
                {poblateContactsCard(i, contact[1], select, undefined)}
                <div className="CreateConvo__GroupContactSelected__button" onClick={
                    ()=>{
                        let list_selected = SelectedCtx.select
                        delete list_selected[contact[0]]
                        SelectedCtx.setSelect(list_selected)
                    }
                }>X</div>
                </div>
                )
            })}
            {contacts.length > 0 ? contacts.map((contact, i) => {
                return poblateContactsCard(i, contact, select, Object.keys(SelectedCtx.select))
            }) : <div className="CreateConvo__SearchContact__NoUsers"><p>No users.</p></div>}
            <div className="CreateConvo__SearchContact__KnownUsers"/>
            {Object.entries(known_users).map((contact, i) =>{
                  return poblateContactsCard(i, contact[1], select, Object.keys(SelectedCtx.select))
            })}
        </div>
    )
};


const poblateContactsCard = (key:number, user:userProfile, selectFunc: (arg0:userProfile)=>void, ignore:string[] | undefined):JSX.Element | null => {
    if (ignore != undefined && ignore.length > 0){
        if (ignore.includes(user.uuid.uuid)){
            return null
        }
    }
    return(<ContactsCard
        key={key}
        timeAgo={0}
        name={user.first_name! + " " + user.last_name!}
        lastMessage={user.phone}
        profileImg={user.avatar_url!}
        unread={0}
        badges={[]}
        selected=""
        toggleSelected={()=>{
            selectFunc(user)
        }}
        />)
}


export {CreateConversationWrapper as CreateConversation};