import { useEffect, useState, useRef, ReactNode } from "react";
import React from "react";
import { userProfile, uuid } from "../utils/interfaces";

interface propsInterface{
    children: ReactNode;
}

type userInfo ={
    user: userProfile | undefined
    setUser: (arg0:userProfile | undefined) => void
    accessToken: string | undefined
    setAccessToken: (arg0:string | undefined) => void
    refreshToken: string | undefined
    setRefreshToken: (arg0:string | undefined) => void
}

interface AuthProp{
    logged: boolean
    setLogged: (arg0:boolean) => void
    type:userInfo 
}

const AuthContext = React.createContext<AuthProp>({
    logged: false,
    setLogged: (arg0:boolean) => {},
    type:{
    user: undefined,
    setUser: (arg0:userProfile | undefined) => {},
    accessToken: undefined,
    setAccessToken: (arg0:string | undefined) => {},
    refreshToken: undefined,
    setRefreshToken: (arg0:string | undefined) => {}
    }
})

const AuthProvider = ({children}:propsInterface) => {
    const [logged, setLogged] = useState<boolean>(false);
    const [user, setUser] = useState<userProfile | undefined>();
    const [accessToken, setAccessToken] = useState<string | undefined>();
    const [refreshToken, setRefreshToken] = useState<string | undefined>();
    const type = {
        user, setUser, accessToken, setAccessToken, refreshToken, setRefreshToken
    }

    return (
        <AuthContext.Provider value={{logged, setLogged, type}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }