import React, { FormEvent } from "react"

const Login = () => {
    return(
        <form method="POST" >
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="password" name="password" />
            <input type="submit" value="Log in" onSubmit={LoginSubmit}/> 
        </form>
    )
}

const LoginSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
        username: {value: string};
        password: {value: string};
    }   
    const username = target.username.value
    const password = target.password.value    
}


export { Login }