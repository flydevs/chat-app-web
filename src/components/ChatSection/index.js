import React from "react";
import "./ChatSection.scss";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatBody from "./components/ChatBody/ChatBody";
import { FiPaperclip } from "react-icons/fi";
import { IoIosPaperPlane } from "react-icons/io";

function ChatSection() {
	return (
		<div className="chatOverlay">
			<ChatHeader
				profileName="Florencio Dorrance"
				status="Online"
				statusBubble="#68D391"
				profileImg={
					"https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg"
				}
			/>
			<ChatBody />
			<div className="chatOverlay__footer">
				<FiPaperclip className="chatOverlay__footer__paperClip" />
				<div className="chatOverlay__footer__textInputContainer">
					<input
						type="text"
						placeholder="Type a message"
						className="chatOverlay__footer__textInputContainer__textInput"
					></input>
					<IoIosPaperPlane
						size={20}
						color={"#615EF0"}
						className="chatOverlay__footer__textInputContainer__sendMessage"
					/>
				</div>
			</div>
		</div>
	);
}

export default ChatSection;
