import { ReactNode, useContext } from "react";
import { IoIosClose, IoMdReturnLeft } from "react-icons/io";
import { ConversationsContext } from "../../../../stores/ConversationsContext";
import { userProfile } from "../../../../utils/interfaces"
import Avatar from "../../../common/Avatar/Avatar";

import "./ProfileCard.scss"

type ProfProp = {
    user: userProfile
    deselect: () => void
}

const ProfileSection = ({user, deselect}:ProfProp) => {
    const ConvoCtx = useContext(ConversationsContext);
    const selected = ConvoCtx.selected
    return (
        <div className="ProfileCard">
            <div onClick={deselect}><IoMdReturnLeft size={20}/></div>
            <div>
            <div className="ProfileCard__avatar">
            <Avatar profileImg={user.avatar_url} size={124}/>
            </div>
            <div>
            <p className="ProfileCard__title">{user.first_name + " " + user.last_name}</p>
            <p className="ProfileCard__description">{user.description}</p>
            </div>
            </div>
            <div>
                {!(selected?.private) && (<div className="ProfileCard__kick">
                    <IoIosClose size={30} color="rgb(206, 84, 84)"/>
                    <p>Kick User</p>
                </div>)}
            </div>
        </div>
    )
}

export {ProfileSection};