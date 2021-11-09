import React from "react";
import DirectorySection from "../../components/DirectorySection";
import MessageSection from "../../components/MessageSection/index.tsx";
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
      <div className="HomeLayout__messages">
        <ConversationsProvider>
          <MessageSection />
        </ConversationsProvider>
      </div>
      <div className="HomeLayout__chat">
        <ChatSection />
      </div>
      <div className="HomeLayout__directory">
        <DirectorySection />
      </div>
    </div>
  );
}

export default Home;
