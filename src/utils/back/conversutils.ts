import { objectInterface, getConversationsResponse } from "../interfaces";
import { access_token, mock_uuid } from "../mock_auth";

const getConvers = async () => {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("access-token", access_token)
  const data = await fetch(
    `http://localhost:7999/conversation/`+mock_uuid.uuid,
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
