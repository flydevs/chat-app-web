import { objectInterface, getConversationsResponse } from "../interfaces";
import { AuthInfo } from "./request_interfaces";

const getConvers = async (userinfo:AuthInfo) => {
  if (userinfo.access_token == undefined || userinfo.uuid == undefined){
    return[]
}
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("access-token", userinfo.access_token)
  const data = await fetch(
    `http://localhost:7999/conversation/`+userinfo.uuid.uuid,
    { method: "GET",
    headers: requestHeaders}
  );
  const jn: getConversationsResponse= await data.json();
//This is just for testing
  jn.data.forEach(element => {
    if (element.conversation.name === undefined){
      element.conversation.name = "TEST";
    };
    if (element.conversation.last_msg_uuid === undefined){
      element.conversation.last_msg_uuid = {uuid:"what"};
    };
  });
  return jn.data;
};

const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { getConvers, randomNum };
