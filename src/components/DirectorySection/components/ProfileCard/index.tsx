import { ReactNode, useContext } from "react";
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
        <div>
            <div onClick={deselect}>Back</div>
            <div>
            <Avatar profileImg={user.avatar_url} size={124}/>
            <div>
            <p>{user.first_name + " " + user.last_name}</p>
            <p>{user.description}</p>
            </div>
            </div>
            <div>
                {!(selected?.private) && (<div>
                    Kick User
                </div>)}
            </div>
        </div>
    )
}

export {ProfileSection};