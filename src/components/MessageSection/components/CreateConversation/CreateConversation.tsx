import { SearchBar } from "../../../../utils/searchbar/searchbar";
import React, { ReactNode, useContext, useEffect, useState } from "react";

import "./createconversation.scss";
import { NewConvo, storageUsers, userProfile } from "../../../../utils/interfaces";
import { IoIosPeople, IoIosPerson } from "react-icons/io";

import { SelectedContext } from "./components/selectedContext";
import { leaveBackdropProp } from "./components/common";
import { SearchContactGroup, SearchContactPrivate } from "./components/searchContact";





const CreateConversationWrapper = ({turnbackdropoff}:leaveBackdropProp) =>{
    const [select, setSelect] = useState<storageUsers>({})

    return (
    <SelectedContext.Provider value={{select, setSelect}}>
    <CreateConversation turnbackdropoff={turnbackdropoff}/>
    </SelectedContext.Provider>
    )
}


const CreateConversation = ({turnbackdropoff}:leaveBackdropProp) =>{
    const [isPrivate, setIsPrivate] = useState<boolean>(true)
    return (
        <div className="CreateConvo">
        {isPrivate ? <SearchContactPrivate turnbackdropoff={turnbackdropoff}/> : <SearchContactGroup/>}
        <div className="CreateConvo__ButtonsContainer">
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
            <div className={"CreateConvo__PrivateGroupButtons CreateConvo__PrivateGroupButtons__Continue"}>
            </div>
        </div>
        </div>
    )
}

export {CreateConversationWrapper as CreateConversation};