import { useContext } from "react"
import { AuthContext } from "../../../stores/AuthContext"
import { HiOutlineLogout } from "react-icons/hi"

const LogoutHandle = (setLogged:(arg0: boolean)=>void) => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("uuid")
    setLogged(false)
    window.location.reload()
}


export { LogoutHandle };