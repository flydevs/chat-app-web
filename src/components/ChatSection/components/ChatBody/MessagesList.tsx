import { useContext } from "react";
import { ChatContext } from "../../../../stores/ChatContext";
import { message } from "../../../../utils/interfaces"
import { Message } from "./components/Messages/message";



const MessagesList = () => {
    const ChatCxt = useContext(ChatContext)
    const messages:message[] = ChatCxt.messages
    return(
        <div>
    {messages.map((message, i) => {
            var first: boolean = false
            if (i==0 || messages[i-1].author_uuid.uuid != message.author_uuid.uuid){
                first = true
            }
            return <Message key={i} message={message} first={first} group={true}/>

        })
        }
   </div>
    )
}

export {MessagesList}