import React from "react";
import "./Login.scss";

function Login() {
	return(
		<div className='wrapper'>
        
			<div className='form'>
				<div>
					<label htmlFor="User">User</label>
					<input type="text" name="User" id="" />
				</div>
            
				<div>
					<label htmlFor="Password">Password</label>
					<input type="text" name="Password" id="" />
				</div>
            
			</div>
		</div>); 
  
}

export default Login;
