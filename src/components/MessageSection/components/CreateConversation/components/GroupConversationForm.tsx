import React, { useContext } from "react";
import { poblateSelectedContactsCard } from "./common";
import { CreateConversationContext } from "./CreateConversationContext";

import "./style.scss";

const GroupConversationForm = () =>{
    const SelectedCtx = useContext(CreateConversationContext)

    return (
        <div className="SearchContact">
            <div>
                <p><label>Name</label></p>
                <p><input type="text" placeholder="title" id="groupName" required/></p>
                {SelectedCtx.error != null && <p>{SelectedCtx.error.message}</p>}
               
                <p><label>Group Image</label></p>
                <p><input type="text" placeholder="imagesite.site/image.img" id="groupImage"/></p>
            <div>
                <p><label>Participants</label></p>
                <p/>
                {Object.entries(SelectedCtx.select).map((contact, i) => {
                   return poblateSelectedContactsCard(i, contact[1], ()=>{}, SelectedCtx)
                })}
            </div>
            </div>
        </div>
    )
}

export {GroupConversationForm}