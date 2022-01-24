import React, { useContext, useEffect, useState } from "react";
import MembersCards from "./components/MembersCards";
import "./directorySection.scss";
import "./components/ProfileCard/ProfileCard.scss"
import { HiDotsVertical } from "react-icons/hi";
import FilesCard from "./components/FilesCard";
import { ConversationsContext } from "../../stores/ConversationsContext";
import { userConversation, userProfile } from "../../utils/interfaces";
import { ProfileSection } from "./components/ProfileCard";
import BackDrop from "../BackDrop/Backdrop";

function DirectorySection() {
  const ConvoCtx = useContext(ConversationsContext)
  const [participants, setParticipants] = useState<userConversation[]>([])
  useEffect(()=>{
    if (ConvoCtx.selected?.participants != undefined) {
      setParticipants(ConvoCtx.selected?.participants)
    }
  }, [ConvoCtx.selected])
  const [userSelect, setUserSelect] = useState<userProfile | null>(null)

  const [isDirectoryButton, SetisDirectoryButton] = useState<boolean>(false)
  const [displayDirectory, setDisplayDirectory] = useState<boolean>(false)
  
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1360){
      SetisDirectoryButton(true)
    } else {
      SetisDirectoryButton(false)
    };
  });

  const teamMembers = () => {
    return (
    <div className="DirectoryCont__main">
    <div className="DirectoryCont__main__flex">
    <h4>Team Members</h4>
    <div>{participants.length}</div>
    </div>
    <div className="DirectoryCont__main__cards">
      {participants.map((participant) => {
        let user=ConvoCtx.users[participant.user_uuid.uuid];
        const SelectMember = () => {
          setUserSelect(user)
        };
        return <MembersCards user={user} select={SelectMember}/>
      })}
    </div>
  </div>)
  };
  const profileCard = (selectedProfile: userProfile) => {
    const DeselectMember = () => {
      setUserSelect(null)
    }
    return (<div className="DirectoryCont__main">
    <div className="ProfileCard">
      <ProfileSection user={selectedProfile!} deselect={DeselectMember}/>
      </div>
      </div>)
  };

  const directoryContent = (class_string:string) => {
    return (<div className={class_string}>
    <div className="DirectoryCont__head">
      <h2>Directory</h2>
      <button data-testid="MoreButton" className="DirectoryCont__head__more">
        <HiDotsVertical className="DirectoryCont__head__more__icon" />
      </button>
    </div>
    {userSelect == null ? teamMembers() : profileCard(userSelect) }

    <div className="DirectoryCont__main">
      <div className="DirectoryCont__main__flex">
        <h4>Media</h4>
        <div>0</div>
      </div>
      <div className="DirectoryCont__main__cards">
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
</div>)
  };

  return (
    <div>
      { isDirectoryButton ?
      (displayDirectory ? <div>
        {directoryContent("DirectoryContFloating")}
        <BackDrop turnbackdropoff={()=>{setDisplayDirectory(false)}}/>
      </div> : <div onClick={()=>{setDisplayDirectory(true)}}>
        OPEN
      </div>)
     :  directoryContent("DirectoryCont") 
  }
  </div>
  );
}

export default DirectorySection;
{
}
