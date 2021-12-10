import { time } from "console";
import { uuid } from "../interfaces";
import { apiResponse, AuthInfoInterface, LoginProp } from "./request_interfaces";



const PostLoginForm =   async (credentials:LoginProp):Promise<AuthInfoInterface> => {
    const url = `http://localhost:7999/login`
    const body = JSON.stringify(credentials)
    const data = await fetch(
           url,
         { method: "POST",
         body: body
    }
       );
    let response: AuthInfoInterface
    console.log("here go the logins")
    data.headers.forEach(console.log)
    if (data.status != 200){
        response = { status: data.status}} else {
        const jn:{data: uuid, response: apiResponse} = await data.json()
        response = { status: data.status,
        data: {
            uuid: jn.data,
            access_token: data.headers.get("Access-Token")!,
            refresh_token: data.headers.get("Refresh-Token")!,
        }
        }
        };
    return response
    
}

export {PostLoginForm}