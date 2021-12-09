import { getMessagesResponse, uuid } from "../interfaces";
import { access_token, mock_uuid } from "../mock_auth";
import { SendMessageInterface } from "./request_interfaces";


function standardRequest():HeadersInit {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("access-token", access_token)
    requestHeaders.set("Content-Type", "application/json")
    return requestHeaders
}

const getMessages = async (uuid: string) => {
    let requestHeaders = standardRequest()
    const data = await fetch(
        `http://localhost:7999/message/`+uuid,
        {method: "GET",
        headers: requestHeaders
    });
    const jn: getMessagesResponse= await data.json();
    if (jn.data == null){
        jn.data = []
    }
    return jn.data
}

const sendMessage = async (text: string, convoUuid: uuid) => {
    let requestHeaders = standardRequest()
    let body: SendMessageInterface= {message:
        {
            author_uuid: mock_uuid,
            text: text,
            conversation_uuid: convoUuid
        }
    }
    let jsonBody = JSON.stringify(body)
    const data = await fetch(
        `http://localhost:7999/message`,
        {method: "POST",
        body: jsonBody,
        headers: requestHeaders
    });
}

export {getMessages, sendMessage};