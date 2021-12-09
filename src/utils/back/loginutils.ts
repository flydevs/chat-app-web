import { uuid } from "../interfaces";
import { AuthInfoInterface } from "./request_interfaces";

type LoginProp = {
    username:string,
    password:string
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
            response = { status: data.status
            data: {
                
            }
            }
        };
    return response
    
}

export {PostLoginForm}