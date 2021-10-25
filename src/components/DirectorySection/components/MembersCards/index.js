import React from "react";
import "./MembersCards.scss";

const MembersCards = () => {
  return (
    <div className="MemberCard">
      <div className="MemberCard__ImgContainer">
        <img
          className="MemberCard__ImgContainer__ProfilePic"
          src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
        />
      </div>
      <div className="MemberCard__InfoFlex">
        <h5>Florencio Dorrance</h5>
        <p>Market Development Manager</p>
      </div>
    </div>
  );
};

export default MembersCards;
