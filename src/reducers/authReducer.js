import { AUTH_LOGIN, AUTH_LOGOUT } from "../actions/types";

const initialState = {
    username: "",
    isLoggedIn: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                username: action.username,
                isLoggedIn: true
            };

        case AUTH_LOGOUT:
            return initialState
        default:
            return state;
    }
}

export default authReducer