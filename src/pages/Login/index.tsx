import React, { useState } from "react";
import "./Login.scss";
import { connect } from "react-redux";
import { doLogin, doLogout } from "../../actions/auth";
import { Redirect } from "react-router-dom";
import Loader from "../../components/common/Loader";

function Login({ auth, doLogin }: any) {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
    

	if (auth.isLoggedIn) {
		return <Redirect to={"/home"}></Redirect>;
	} else {
		return (
			<div className="container">
				<img src="/images/logo.png" alt="" />
				<div className='form'>
					<div className="form__inputs">
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
					{ loading && <Loader />}
					<div className="form__inputs">
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
					<button onClick={async()=> {
						setLoading(true);
						await doLogin(user, password);
						setLoading(false);
					}}>Login</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any ) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { doLogin, doLogout })(Login);
