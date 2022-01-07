import { getMessagesResponse, uuid } from "../interfaces";
import { AuthInfo, SendMessageInterface } from "./request_interfaces";
import { standardRequest } from "./common";


const getMessages = async (userinfo:AuthInfo,uuid: string, extraparams:string|null) => {
    if (userinfo.access_token == undefined){
        return []
    }
    const data = await fetch(
        `http://localhost:7999/message/`+uuid + (extraparams != null ? extraparams : ""),
        {method: "GET",
        headers: standardRequest(userinfo.access_token)
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
    let body: SendMessageInterface= CreateMessage(userinfo.uuid!, text, convoUuid)
    let jsonBody = JSON.stringify(body)
    const data = await fetch(
        `http://localhost:7999/message`,
        {method: "POST",
        body: jsonBody,
        headers: requestHeaders
    });
};

const CreateMessage = (author:uuid, text:string, conversation?:uuid):SendMessageInterface => {
    return {
        message:{
            author_uuid: author,
            text: text,
            conversation_uuid: conversation
        }
    }
}

export {getMessages, sendMessage, CreateMessage};