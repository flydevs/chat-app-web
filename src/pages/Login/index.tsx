import {useContext, useState} from "react"
import { Login } from "../../components/AuthSection/Login/Login"
import { Register } from "../../components/AuthSection/Register/Register"
import { Sidebar } from "../../components/Sidebar"
import { HiOutlineLogout } from "react-icons/hi"
import './Login.scss'
import { AuthContext } from "../../stores/AuthContext"
import { Redirect, Route } from "react-router-dom"


function LoginPage() {
    const AuthCtx = useContext(AuthContext)
    const logged = AuthCtx.logged
    const [isLogin, setIsLogin] = useState(true)

    const setRegister = () => {
        setIsLogin(false)
    }

    const setLogin = () => {
        setIsLogin(true)
    }

    const LoginContainer = () => {
        return (
        <div className="Login__Container">
            <div className="Login__Container__Menu">
                <button onClick={setLogin} className={isLogin ? "Selected" : ""}><h2>Log in</h2></button>
                <button onClick={setRegister} className={isLogin ? "" : "Selected"}><h2>Register</h2></button>
            </div>
            {isLogin ? <Login /> : <Register/>}
        </div>
        )
    }

    return(
        <div className="Login">
            <div>
            <Sidebar selected="login"/>
            </div>
            {logged ? <Redirect to="/"/> : <LoginContainer/>}

        </div>
    )
}

export default LoginPage;