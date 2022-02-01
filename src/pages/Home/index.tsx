import React from "react";
import DirectorySection from "../../components/DirectorySection";
import MessageSection from "../../components/MessageSection";
import ChatSection from "../../components/ChatSection";
import { ConversationsProvider } from "../../stores/ConversationsContext";
import "./Home.scss";
import Sidebar from "../../components/Sidebar";

function Home() {
	return (
		<div className="homeLayout">
			<div className="homeLayout__sidebar">
				<Sidebar />
			</div>
			<div className="homeLayout__messages">
				<ConversationsProvider>
					<MessageSection />
				</ConversationsProvider>
			</div>
			<div className="homeLayout__chat">
				<ChatSection />
			</div>
			<div className="homeLayout__directory">
				<DirectorySection />
			</div>
		</div>
	);
}

export default Home;
