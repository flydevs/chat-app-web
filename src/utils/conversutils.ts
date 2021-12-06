import { objectInterface, getConversationsResponse } from "./interfaces";

const getConvers = async () => {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mzg4MjU2NTIsInV1aWQiOiI2ZDQ5ZDM4Zi0xZGZjLTRmM2ItOWQ1Yy00YThkNTkwZmE5YTIiLCJwZXJtaXNzaW9ucyI6MH0.j4hkcJ1zESqYZZPfwSUg8M_0gtCLUkL1U05QHT7Pkio")
  requestHeaders.set("Content-Type", "application/json")
  const data = await fetch(
    `http://localhost:7999/conversation/6d49d38f-1dfc-4f3b-9d5c-4a8d590fa9a2`,
    { method: "GET",
    headers: requestHeaders}
  );
  const jn: getConversationsResponse= await data.json();
  var i = 0
  jn.data.forEach(element => {
    if (element.conversation.name === undefined){
      element.conversation.name = "TEST"+i
      i++
    }
    if (element.conversation.lastMsgUuid === undefined){
      element.conversation.lastMsgUuid = {uuid:"what"}
    }
  });
  return jn.data;
};

const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { getConvers, randomNum };
