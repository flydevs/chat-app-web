import React, {useEffect, useState} from "react";
import DirectorySection from "../../components/DirectorySection";
import MessageSection from "../../components/MessageSection";
import ChatSection from "../../components/ChatSection";
import { ConversationsProvider } from "../../stores/ConversationsContext";

import "./Home.scss";
import {Sidebar} from "../../components/Sidebar";
import { ChatProvider } from "../../stores/ChatContext";
import { CheckLogged } from "../../utils/checkiflogged";
function Home() {

  const [isDirectoryButton, SetisDirectoryButton] = useState<boolean>(false)


  const directoryWidthCheck = () => {
    if (window.innerWidth <= 1360){
      SetisDirectoryButton(true)
    } else {
      SetisDirectoryButton(false)
    };
  }
  useEffect(()=>{
    directoryWidthCheck()
  }, [])
  window.addEventListener("resize", () => {
    directoryWidthCheck()
  });

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
      <div className={!isDirectoryButton ? "HomeLayout__directory": "HomeLayout__smallDirectory"}>
        <DirectorySection isDirectoryButton={isDirectoryButton}/>
      </div>
      </ConversationsProvider>
    </div>
  );
}

export default Home;
