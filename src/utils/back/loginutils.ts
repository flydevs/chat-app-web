import { time } from "console";
import { uuid } from "../interfaces";
import { customHeaders } from "./common";
import { apiResponse, apiResponseFix, AuthInfo, AuthInfoInterface, AuthRegisterResponse, LoginProp, RegisterProp } from "./request_interfaces";

const PostRegisterForm = async (credentials:RegisterProp):Promise<apiResponseFix> => {
    const url = `http://localhost:7999/user`
    const body = JSON.stringify(credentials)
    const data = await fetch(
           url,
         { method: "POST",
         body: body
    }
    );
    let jn:AuthRegisterResponse =  await data.json()
    console.log(jn)
    return jn.response
}

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
    
};

const RefreshTokenRequest = async (credentials:string):Promise<AuthInfoInterface> => {
    const url = `http://localhost:7999/token`
    const custom_header = customHeaders([{key: "refresh-token", value: credentials}])
    const data = await fetch(
           url,
         { method: "POST",
            headers: custom_header
    }
       );
    let response: AuthInfoInterface
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
};

export {PostLoginForm, PostRegisterForm, RefreshTokenRequest}