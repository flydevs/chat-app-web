import React from "react";
import Avatar from "../../../common/Avatar/Avatar";
import "./contactsCard.scss";
function ContactsCard({
  profileImg,
  contactName,
  lastMessage,
  badges,
  selected,
  timeAgo,
}) {
  console.log(badges);
  return (
    <div className={"contactCard " + selected}>
      <Avatar size={48} profileImg={profileImg} />
      <div className="contactCard__info">
        <h2>{contactName}</h2>
        <h3>{lastMessage}</h3>
        <div className="contactCard__info__badges">
          {badges.map((badge) => (
            <div
              className="contactCard__info__badges__badge"
              style={{
                backgroundColor: badge.backgroundColor,
                color: badge.color,
              }}
            >
              {badge.text}
            </div>
          ))}
        </div>
      </div>
      <div className="contactCard__timeAgo">{timeAgo}</div>
    </div>
  );
}

export default ContactsCard;
