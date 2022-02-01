import { AUTH_LOGIN, AUTH_LOGOUT } from "../actions/types";
import { defineState } from "redux-localstore";

const defaultState = {
	username: "",
	isLoggedIn: false
};

const initialState = defineState(defaultState)("auth");

const authReducer = (state = initialState, action) => {
	switch(action.type) {
	case AUTH_LOGIN:
		return {
			...state,
			username: action.username,
			isLoggedIn: true
		};

	case AUTH_LOGOUT:
		return defaultState;
	default:
		return state;
	}
};

export default authReducer;