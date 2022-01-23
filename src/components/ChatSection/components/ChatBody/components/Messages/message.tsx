import { useContext } from "react";
import { json } from "stream/consumers";
import { AuthContext } from "../../../../../../stores/AuthContext";
import { ConversationsContext } from "../../../../../../stores/ConversationsContext";
import { message, storageUsers, userProfile } from "../../../../../../utils/interfaces";
import Avatar from '../../../../../common/Avatar/Avatar';
import "./message.scss";

type MessageProps = {
    message: message,
    first: boolean,
    group: boolean
}

const Message = ({message, first, group}:MessageProps) => {
    const userclientUuid: string= useContext(AuthContext).userInfo.uuid?.uuid!
    const users:storageUsers = useContext(ConversationsContext).users
    const author_parsed = users[message.author_uuid.uuid]
    if (author_parsed == undefined || author_parsed == null){
        return(
            <div>Error</div>
        )
    }

    let isSent: boolean = (():boolean=>{
        return author_parsed.uuid.uuid == userclientUuid
    })()

    if (first) {
        return (
            <div>
                {!(isSent) && <div>{author_parsed.first_name+ " " + author_parsed.last_name}</div>}
            <div className="chatTextColumn" id={message.uuid.uuid}>
                <div className={"chatTextColumn__messageDiv chatTextColumn__messageDiv"+(isSent ? "__sent" : "__received")}>
                    <p className={"chatTextColumn__text chatTextColumn__text"+(isSent ? "__sent" : "__received")}>{message.text}</p>
                    <Avatar size={40} profileImg={author_parsed.avatar_url} />
                </div>

            </div>
            </div>
        )
    }
    else {
        return (
            <div>
            <div className="chatTextColumn" id={message.uuid.uuid}>
                <div className={"chatTextColumn__messageDiv chatTextColumn__messageDiv__withoutAvatar" + (isSent ? "__sent" : "__received") + " chatTextColumn__messageDiv"+(isSent ? "__sent" : "__received")}>
                    <p className={"chatTextColumn__text chatTextColumn__text"+(isSent ? "__sent" : "__received")}>{message.text}</p>
                </div>
            </div>
            </div>
        )
    }
}

export {Message}