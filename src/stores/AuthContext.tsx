import { useEffect, useState, useRef, ReactNode } from "react";
import React from "react";
import { userProfile, uuid } from "../utils/interfaces";
import { AuthInfo } from "../utils/back/request_interfaces";

//This whole file is am mess, fix later

interface propsInterface{
    children: ReactNode;
}

type setUserInfo ={
    setUser: (arg0:uuid | undefined) => void
    setAccessToken: (arg0:string | undefined) => void
    setRefreshToken: (arg0:string | undefined) => void
}

interface AuthProp{
    logged: boolean
    setLogged: (arg0:boolean) => void
    userInfo:AuthInfo
    setUser:setUserInfo 

}

const AuthContext = React.createContext<AuthProp>({
    logged: false,
    setLogged: (arg0:boolean) => {},
    userInfo:{
    uuid: undefined,
    access_token: undefined,
    refresh_token: undefined,
},
    setUser:{
    setUser: (arg0:uuid | undefined) => {},
    setAccessToken: (arg0:string | undefined) => {},
    setRefreshToken: (arg0:string | undefined) => {}
    }
})

const AuthProvider = ({children}:propsInterface) => {
    let uuid_string =localStorage.getItem("uuid")
    let current_user_uuid: uuid | undefined
    let storage_access_token = localStorage.getItem("accessToken")
    let storage_refresh_token= localStorage.getItem("refreshToken")

    let current_access_token: string | undefined
    let current_refresh_token: string | undefined
    let auth_exists = false
    if (uuid_string != null){
        current_user_uuid = {uuid: uuid_string}
        auth_exists = true

        current_access_token = storage_access_token!
        current_refresh_token = storage_refresh_token!
    }
    
    const [logged, setLogged] = useState<boolean>(false);
    const [uuid, setUser] = useState<uuid | undefined>(current_user_uuid);
    const [access_token, setAccessToken] = useState<string | undefined>(current_access_token);
    const [refresh_token, setRefreshToken] = useState<string | undefined>(current_refresh_token);
    
    const user={
        uuid, access_token, refresh_token
    }
    const setUserAuth={
        setUser, setAccessToken, setRefreshToken
    }

    return (
        <AuthContext.Provider value={{logged, setLogged, userInfo: user, setUser: setUserAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }