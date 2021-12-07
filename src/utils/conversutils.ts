import { objectInterface, getConversationsResponse } from "./interfaces";

const getConvers = async () => {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mzg5MTUxOTUsInV1aWQiOiI2ZDQ5ZDM4Zi0xZGZjLTRmM2ItOWQ1Yy00YThkNTkwZmE5YTIiLCJwZXJtaXNzaW9ucyI6MH0.n6oz3IJmPXtmvEfIs5FET4PBLex2fOOU-PM3wVKe26g")
  const data = await fetch(
    `http://localhost:7999/conversation/6d49d38f-1dfc-4f3b-9d5c-4a8d590fa9a2`,
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
