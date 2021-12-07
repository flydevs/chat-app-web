import { message } from "../../../../utils/interfaces"
import MessageRecived from "./messageRecived/messageRecived";
import MessageSent from "./messageSent/messageSent";

type MessageProps = {
    messages: message[]
}

const MessagesList = ({messages}: MessageProps) => {
    const authorUuid: string= "6d49d38f-1dfc-4f3b-9d5c-4a8d590fa9a2"
    const placeholderSentMessage:string = `https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg`
    const placeholderReceivedMessage:string = `'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'`
    return(
        <div>
    {messages.map((message, i) => {
        console.log("Here we have this " + i)
        console.log(messages)
        var first: boolean = false
        if (i==0 || messages[i-1].author_uuid.uuid != message.author_uuid.uuid){
            first = true
        }
        return (message.author_uuid.uuid == authorUuid) ? <MessageSent key={i} first={first} text={message.text} profileImg={placeholderSentMessage}/> : <MessageRecived key={i} first={first} text={message.text} profileImg={placeholderReceivedMessage}/>

   })}
   </div>
    )
}

export {MessagesList}