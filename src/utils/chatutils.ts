import { getMessagesResponse } from "./interfaces";

const getMessages = async (uuid: string) => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzkwMDA1MzksInV1aWQiOiI2ZDQ5ZDM4Zi0xZGZjLTRmM2ItOWQ1Yy00YThkNTkwZmE5YTIiLCJwZXJtaXNzaW9ucyI6MH0.W7f0Vq3_DOSubCNgtIaOJrKMh8bHrqxLN5HWEcXbPPk")
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