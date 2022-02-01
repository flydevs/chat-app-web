import { REQUEST_CONVERSATIONS, SUCCESS_CONVERSATIONS } from "./types";

const requestConversations = () => ({
	type: REQUEST_CONVERSATIONS
});

const successConversations = (conversations) => ({
	type: SUCCESS_CONVERSATIONS,
	conversations
});

export const fetchConversations = () => {
	return (dispatch) => {
		dispatch(requestConversations());
		fetch("https://617b0784cb1efe001701015c.mockapi.io/convers")
			.then((response) => response.json())
			.then((result) => dispatch(successConversations(result)));
	};
};
