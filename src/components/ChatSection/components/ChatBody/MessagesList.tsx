import { message } from "../../../../utils/interfaces"
import { Message } from "./components/Messages/message";

type MessageProps = {
    messages: message[]
}

const MessagesList = ({messages}: MessageProps) => {
    return(
        <div>
    {messages.map((message, i) => {
        console.log("Here we have this " + i)
        console.log(messages)
        var first: boolean = false
        if (i==0 || messages[i-1].author_uuid.uuid != message.author_uuid.uuid){
            first = true
        }
        return <Message message={message} first={first} group={true} />

   })}
   </div>
    )
}

export {MessagesList}