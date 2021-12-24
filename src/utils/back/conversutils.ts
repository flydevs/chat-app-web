import { objectInterface, getConversationsResponse } from "../interfaces";
import { UuidResponse, AuthInfo, SendMessageInterface, NewConversationInterface, uuid } from "./request_interfaces";
import { standardRequest } from "./common";
import { CreateMessage } from "./chatutils";

const getConvers = async (userinfo:AuthInfo) => {
  if (userinfo.access_token == undefined || userinfo.uuid == undefined){
    return[]
}

  const data = await fetch(
    `http://localhost:7999/conversation/`+userinfo.uuid.uuid,
    { method: "GET",
    headers: standardRequest(userinfo.access_token)}
  );
  const jn: getConversationsResponse= await data.json();
//This is just for testing
  jn.data.forEach(element => {
    if (element.conversation.name === undefined){
      element.conversation.name = "TEST";
    };
  });
  return jn.data;
};

const createConversRequest = async (userinfo:AuthInfo, text: string, type: number, participants: uuid[], name?:string, avatar_url?:string) => {
  if (userinfo.access_token == undefined || userinfo.uuid == undefined){
    return[]
}
  let message = CreateMessage(userinfo.uuid, text)
  let body = createConversationMessage(message, createConversation(type, participants, name, avatar_url)) 
  const data = await fetch(
    `http://localhost:7999/message/`,
    { method: "POST",
    headers: standardRequest(userinfo.access_token),
    body: JSON.stringify(body)
  }
    );
  const jn: UuidResponse = await data.json()
  return jn.data
};

const createConversationMessage = (message:SendMessageInterface, conversation:NewConversationInterface):SendMessageInterface => {
  message.create_conversation = true
  message.new_convo= {conversation: conversation}
  return message
}

const createConversation = (type:number, participants: uuid[], name?: string, avatar_url?: string):NewConversationInterface => {
  let participant_list: {user_uuid: uuid}[] = []
  participants.forEach((participant)=>{
    participant_list.push({user_uuid: participant})
  });
  return {
  name: name,
  type: type,
  avatar_url: avatar_url,
  participants: participant_list
};
};

const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { getConvers, createConversRequest, randomNum };
