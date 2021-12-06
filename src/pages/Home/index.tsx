import React from "react";
import DirectorySection from "../../components/DirectorySection";
import MessageSection from "../../components/MessageSection";
import ChatSection from "../../components/ChatSection";
import { ConversationsProvider } from "../../stores/ConversationsContext";

import "./Home.scss";
import Sidebar from "../../components/Sidebar";
function Home() {
  return (
    <div className="HomeLayout">
      <div className="HomeLayout__sidebar">
        <Sidebar />
      </div>
        <ConversationsProvider>
      <div className="HomeLayout__messages">
        <MessageSection />
      </div>
      <div className="HomeLayout__chat">
        <ChatSection />
      </div>
        </ConversationsProvider>
      <div className="HomeLayout__directory">
        <DirectorySection />
      </div>
    </div>
  );
}

export default Home;
