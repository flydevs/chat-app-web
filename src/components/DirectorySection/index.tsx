import React, { useContext, useEffect, useState } from "react";
import MembersCards from "./components/MembersCards";
import "./directorySection.scss";
import { HiDotsVertical } from "react-icons/hi";
import FilesCard from "./components/FilesCard";
import { ConversationsContext } from "../../stores/ConversationsContext";
import { userConversation } from "../../utils/interfaces";

function DirectorySection() {
  const ConvoCtx = useContext(ConversationsContext)
  const [participants, setParticipants] = useState<userConversation[]>([])
  useEffect(()=>{
    if (ConvoCtx.selected?.participants != undefined) {
      setParticipants(ConvoCtx.selected?.participants)
    }
  }, [ConvoCtx.selected])
  
  return (
    <div className="DirectoryCont">
      <div className="DirectoryCont__head">
        <h2>Directory</h2>
        <button data-testid="MoreButton" className="DirectoryCont__head__more">
          <HiDotsVertical className="DirectoryCont__head__more__icon" />
        </button>
      </div>
      <div className="DirectoryCont__main">
        <div className="DirectoryCont__main__flex">
          <h4>Team Members</h4>
          <div>{participants.length}</div>
        </div>
        <div className="DirectoryCont__main__cards">
          {participants.map((participant) => {
            return <MembersCards user={ConvoCtx.users[participant.user_uuid.uuid]}/>
          })}
        </div>
      </div>
      <div className="DirectoryCont__main">
        <div className="DirectoryCont__main__flex">
          <h4>Files</h4>
          <div>0</div>
        </div>
        <div className="DirectoryCont__main__cards">
        </div>
      </div>
    </div>
  );
}

export default DirectorySection;
{
}
