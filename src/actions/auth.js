
import { AUTH_LOGIN, AUTH_LOGOUT } from "./types";


const userLogin = (username) => ({
	type: AUTH_LOGIN,
	username
});
  
const userLogout = () => ({
	type: AUTH_LOGOUT
});

const fakeLoginRequest = (username, password) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      username === "user" && password === 'pass' ? resolve(username) : reject("User or password are invalid");
    }, 3000)
  );

  export const doLogin = (username, password) => async (dispatch) => {
    try {
      const userResponse = await fakeLoginRequest(username, password);
      dispatch(userLogin(userResponse));
    } catch (error) {
      alert(error);
    }
  };

export const doLogout = () => (dispatch) => {
	dispatch(userLogout());
};