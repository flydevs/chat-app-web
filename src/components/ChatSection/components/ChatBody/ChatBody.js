import "./ChatBody.scss";
import React from "react";
import MessageRecived from "./messageRecived/messageRecived";
import MessageSent from "./messageSent/messageSent";

function ChatBody() {
	return (
		<div className="chatContainer">
			<div className="chatContainer__chatBox"></div>
			<MessageSent
				first={true}
				text={"omg, this is amazing"}
				profileImg={
					"https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg"
				}
			/>
			<MessageSent text={"perfect!"} />
			<MessageSent text={"wow, this is really epic"} />
			<MessageRecived
				first={true}
				text={"how are you?"}
				profileImg={
					"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				}
			/>
			<MessageSent
				first={true}
				text={"just ideas for the next time"}
				profileImg={
					"https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg"
				}
			/>
			<MessageSent text={"I'll be there in two minutes!"} />
			<MessageRecived
				first={true}
				text={"woohooo"}
				profileImg={
					"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				}
			/>
			<MessageRecived text={"Haha oh man"} />
			<MessageRecived text={"Haha that's terrifying :)"} />
			<MessageSent
				first={true}
				text={"aww"}
				profileImg={
					"https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg"
				}
			/>
			<MessageSent text={"omg, this is amazing!"} />
			<MessageSent text={"woohoooo"} />
		</div>
	);
}

export default ChatBody;
