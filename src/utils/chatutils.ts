import { getMessagesResponse } from "./interfaces";

const getMessages = async (uuid: string) => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mzg5MTUxOTUsInV1aWQiOiI2ZDQ5ZDM4Zi0xZGZjLTRmM2ItOWQ1Yy00YThkNTkwZmE5YTIiLCJwZXJtaXNzaW9ucyI6MH0.n6oz3IJmPXtmvEfIs5FET4PBLex2fOOU-PM3wVKe26g")
    requestHeaders.set("Content-Type", "application/json")

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

export {getMessages};