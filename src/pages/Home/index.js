import React from "react";
import DirectorySection from "../../components/DirectorySection";
import MessageSection from "../../components/MessageSection";
import ChatSection from "../../components/ChatSection";

import "./Home.scss";
function Home() {
  return (
    <div className="HomeLayout">
      <div className="HomeLayout__sidebar">Sidebar</div>
      <div className="HomeLayout__messages">
        <MessageSection />
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
