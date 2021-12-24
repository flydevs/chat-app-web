import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../stores/AuthContext";

const CheckLogged = () =>{
    const logged = useContext(AuthContext).logged
    console.log("checking logged")
    if (!logged) {
        return <Redirect to={"/login"}/>
    } else {
        return null
    }
}

export { CheckLogged };