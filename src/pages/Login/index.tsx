import {useState} from "react"
import { Login } from "../../components/AuthSection/Login/Login"
import { Register } from "../../components/AuthSection/Register/Register"
import { Sidebar } from "../../components/Sidebar"
import './index.scss'

function LoginPage() {
    const [isLogin, setIsLogin] = useState(true)

    const setRegister = () => {
        setIsLogin(false)
    }

    const setLogin = () => {
        setIsLogin(true)
    }

    return(
        <div>
            <div style={{left:"0px", position:"absolute"}}>
            <Sidebar selected="login"/>
            </div>
            <div className="LoginContainer">
                <div className="LoginContainer__Menu">
                <button onClick={setLogin}>Login</button>
                <button onClick={setRegister}>Register</button>
                </div>
                {isLogin ? <Login /> : <Register/>}
            </div>
        </div>
    )
}

export default LoginPage;