<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, {  useState } from "react";
>>>>>>> bb37e68c734f72095a41f76361a21515ef1321d2
import "./Login.scss";
import { connect } from "react-redux";
import { doLogin, doLogout } from "../../actions/auth";
import { Redirect } from "react-router-dom";
import Loader from "../../components/common/Loader";

function Login({ auth, doLogin }: any) {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
<<<<<<< HEAD
	const [loading, setLoading] = useState(false);
    
=======
>>>>>>> bb37e68c734f72095a41f76361a21515ef1321d2

	if (auth.isLoggedIn) {
		return <Redirect to={"/home"}></Redirect>;
	} else {
		return (
			<div className="container">
				<img src="/images/logo.png" alt="" />
<<<<<<< HEAD
				<div className='form'>
					<div className="form__inputs">
=======
				<div className="form">
					<div>
>>>>>>> bb37e68c734f72095a41f76361a21515ef1321d2
						<label htmlFor="User">User</label>
						<input
							value={user}
							onChange={(e) => {
								setUser(e.target.value);
							}}
							type="text"
							name="User"
							id=""
						/>
					</div>
<<<<<<< HEAD
					{ loading && <Loader />}
					<div className="form__inputs">
=======

					<div>
>>>>>>> bb37e68c734f72095a41f76361a21515ef1321d2
						<label htmlFor="Password">Password</label>
						<input
							type="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							name="Password"
							id=""
						/>
					</div>
<<<<<<< HEAD
					<button onClick={async()=> {
						setLoading(true);
						await doLogin(user, password);
						setLoading(false);
					}}>Login</button>
=======
					<button
						onClick={() => {
							doLogin(user, password);
						}}
					>
            Login
					</button>
>>>>>>> bb37e68c734f72095a41f76361a21515ef1321d2
				</div>
			</div>
		);
	}
}

<<<<<<< HEAD
const mapStateToProps = (state: any ) => ({
	auth: state.auth,
=======
const mapStateToProps = (state: any) => ({
	auth: state.auth
>>>>>>> bb37e68c734f72095a41f76361a21515ef1321d2
});

export default connect(mapStateToProps, { doLogin, doLogout })(Login);
