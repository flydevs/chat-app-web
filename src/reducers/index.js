import { combineReducers } from "redux";
import authReducer from "./authReducer";
import conversationsReducer from "./conversationsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  conversations: conversationsReducer
});

export default rootReducer;
