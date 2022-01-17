import React from "react";
import "./MembersCards.scss";
import Avatar from "../../../common/Avatar/Avatar";
import { userProfile } from "../../../../utils/interfaces";

interface MemberCardProps {
  user: userProfile
}

const MembersCards= ({user}:MemberCardProps) => {
  return (
    <div className="MemberCard">
      <Avatar
        profileImg={user.avatar_url}
        size={48}
      />
      <div className="MemberCard__InfoFlex">
        <h5>{user.first_name + " " + user.last_name}</h5>
        <p>{user.description}</p>
      </div>
    </div>
  );
};

export default MembersCards;
