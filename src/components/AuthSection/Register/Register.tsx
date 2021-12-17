import React from "react"
import { PostRegisterForm } from "../../../utils/back/loginutils"
import { apiResponse, apiResponseFix, RegisterProp } from "../../../utils/back/request_interfaces"

import "../index.scss"

const Register = () =>{
    let registerError:apiResponseFix | undefined

    const RegisterSubmit= async (e:React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const target = e.target as typeof e.target & {
                username: {value:string},
                password: {value:string},
                first_name: {value:string},
                last_name: {value:string},
                phone: {value:string},
                avatar_url: {value:string},
            
        } 
        const RegisterForm:RegisterProp = {
            login_info: {
                login_user: target.username.value,
                login_password: target.password.value
            },
            profile_info: {
                phone: target.phone.value,
                first_name: target.first_name.value,
                last_name: target.last_name.value,
                avatar_url: target.avatar_url.value,
            }
        }
        console.log(RegisterForm)
        let response = await PostRegisterForm(RegisterForm)
        registerError = response
 

    }
    return(
        <div>
        <form method="POST" onSubmit={RegisterSubmit} className="Form">
            <p><label>Username</label></p>
            <p><input type="text" placeholder="username" name="username" required/></p>
            <p><label>Password</label></p>
            <p><input type="text" placeholder="password" name="password" required/></p>

            <p className="Form__Separator">Your Info</p>
            <p><label>First Name</label></p>
            <p><input type="text" placeholder="first_name" name="first_name" required /></p>
            <p><label>Last Name</label></p>
            <p><input type="text" placeholder="last_name" name="last_name" required /></p>
            <p><label>Phone</label></p>
            <p><input type="tel" placeholder="phone" name="phone" pattern="\(?([0-9]{2,4})\)?([ .-]?)([0-9]{3})\2([0-9]{4})" required/></p>
            <p><label>AvatarUrl</label></p>
            <p><input type="text" placeholder="imagesite.com/image.png" name="avatar_url" /></p>

            <input type="submit" value="Register" className="Form__Button"/>
        </form>
        {registerError != undefined && <p>{registerError.message}</p> }
        </div>
    )
}

export {Register}