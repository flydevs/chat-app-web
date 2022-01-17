import React from "react";
import DirectorySection from "../../components/DirectorySection";
import MessageSection from "../../components/MessageSection";
import ChatSection from "../../components/ChatSection";
import { ConversationsProvider } from "../../stores/ConversationsContext";

import "./Home.scss";
import {Sidebar} from "../../components/Sidebar";
import { ChatProvider } from "../../stores/ChatContext";
import { CheckLogged } from "../../utils/checkiflogged";
function Home() {
  return (
    <div className="HomeLayout">
      <CheckLogged/>
      <div className="HomeLayout__sidebar">
        <Sidebar selected="chat" />
      </div>
        <ConversationsProvider>
      <div className="HomeLayout__messages">
        <MessageSection />
      </div>
      <div className="HomeLayout__chat">
        <ChatProvider>
        <ChatSection />
        </ChatProvider>
      </div>
      <div className="HomeLayout__directory">
        <DirectorySection />
      </div>
      </ConversationsProvider>
    </div>
  );
}

export default Home;
