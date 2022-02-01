import { REQUEST_CONVERSATIONS, SUCCESS_CONVERSATIONS } from "../actions/types";

const initialState = {
	conversations: null,
	isLoading: false
};

const conversationsReducer = (state = initialState, action) => {
	switch (action.type) {
	case REQUEST_CONVERSATIONS:
		return {
			...state,
			isLoading: true
		};
	case SUCCESS_CONVERSATIONS:
		return {
			...state,
			conversations: action.conversations,
			isLoading: initialState.isLoading
		};
	default:
		return state;
	}
};

export default conversationsReducer;
