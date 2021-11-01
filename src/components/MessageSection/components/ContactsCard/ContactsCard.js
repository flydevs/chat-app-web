import React from "react";
import { TimeAgo } from "../../../../utils/timeAgoCalculator";
import Avatar from "../../../common/Avatar/Avatar";
import "./contactsCard.scss";
function ContactsCard({
  profileImg,
  firstName,
  lastName,
  lastMessage,
  badges,
  selected,
  timeAgo
}) {
  console.log(badges);
  return (
    <div className={"contactCard " + selected}>
      <Avatar size={48} profileImg={profileImg} />
      <div className="contactCard__info">
        <h2>{firstName + lastName}</h2>
        <h3>{lastMessage}</h3>
        <div className="contactCard__info__badges">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="contactCard__info__badges__badge"
              style={{
                backgroundColor: badge.backgroundColor,
                color: badge.color
              }}
            >
              {badge.text}
            </div>
          ))}
        </div>
      </div>
      <div className="contactCard__timeAgo">{TimeAgo(timeAgo)}</div>
    </div>
  );
}

export default ContactsCard;
