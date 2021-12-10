import { getMessagesResponse, uuid } from "../interfaces";
import { AuthInfo, SendMessageInterface } from "./request_interfaces";


function standardRequest(token:string):HeadersInit {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("access-token", token)
    requestHeaders.set("Content-Type", "application/json")
    return requestHeaders
}

const getMessages = async (userinfo:AuthInfo,uuid: string) => {
    if (userinfo.access_token == undefined){
        return []
    }
    let requestHeaders = standardRequest(userinfo.access_token)
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

const sendMessage = async (userinfo:AuthInfo,text: string, convoUuid: uuid) => {
    if (userinfo.access_token == undefined || userinfo.uuid == undefined){
        return
    }
    let requestHeaders = standardRequest(userinfo.access_token!)
    let body: SendMessageInterface= {message:
        {
            author_uuid: userinfo.uuid!,
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