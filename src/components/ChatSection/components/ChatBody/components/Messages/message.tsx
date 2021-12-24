import { useContext } from "react";
import { json } from "stream/consumers";
import { AuthContext } from "../../../../../../stores/AuthContext";
import { message, storageUsers, userProfile } from "../../../../../../utils/interfaces";
import Avatar from '../../../../../common/Avatar/Avatar';
import "./message.scss";

type MessageProps = {
    message: message,
    first: boolean,
    group: boolean
}

const Message = ({message, first, group}:MessageProps) => {
    const authorUuid: string= useContext(AuthContext).userInfo.uuid?.uuid!
    const users_string = localStorage.getItem("users")
    const users:storageUsers = JSON.parse(users_string!)
    const author_parsed = users[message.author_uuid.uuid]
    if (author_parsed == undefined || author_parsed == null){
        return(
            <div>Error</div>
        )
    }

    let sentOrReceived: string = (():string=>{
        let result = ""
        author_parsed.uuid.uuid == authorUuid ? result="__sent" : result="__received"
        return result;
    })()

    if (first) {
        return (
            <div className="chatTextColumn" id={message.uuid.uuid}>
                <div className={"chatTextColumn__messageDiv chatTextColumn__messageDiv"+sentOrReceived}>
                    <p className={"chatTextColumn__text chatTextColumn__text"+sentOrReceived}>{message.text}</p>
                    <Avatar size={40} profileImg={author_parsed.avatar_url} />
                </div>

            </div>
        )
    }
    else {
        return (
            <div className="chatTextColumn" id={message.uuid.uuid}>
                <div className={"chatTextColumn__messageDiv chatTextColumn__messageDiv__withoutAvatar" + sentOrReceived + " chatTextColumn__messageDiv"+sentOrReceived}>
                    <p className={"chatTextColumn__text chatTextColumn__text"+sentOrReceived}>{message.text}</p>
                </div>
            </div>
        )
    }
}

export {Message}