import React, { FormEvent, useContext } from "react"
import { AuthContext } from "../../../stores/AuthContext";
import { PostLoginForm } from "../../../utils/back/loginutils";
import { AuthInfoInterface, LoginProp } from "../../../utils/back/request_interfaces";

const Login = () => {
    let AuthCtx = useContext(AuthContext)

    const LoginSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            username: {value: string};
            password: {value: string};
        }   
        const username = target.username.value
        const password = target.password.value
        
        let request: LoginProp ={username: username, password: password}
        let response: AuthInfoInterface=  await PostLoginForm(request)

        if (response.status == 200){
            AuthCtx.setUser.setAccessToken(response.data?.access_token)
            AuthCtx.setUser.setRefreshToken(response.data?.refresh_token)
            AuthCtx.setUser.setUser(response.data?.uuid)
            localStorage.setItem("uuid",response.data?.uuid?.uuid!)
            localStorage.setItem("accessToken", response.data?.access_token!)
            localStorage.setItem("refreshToken", response.data?.refresh_token!)
            AuthCtx.setLogged(true)
            window.location.reload()
        }
    }
    return(
        <form method="POST" onSubmit={LoginSubmit}>
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="password" name="password" />
            <input type="submit" value="Log in"/> 
        </form>
    )
}


export { Login }