import React from "react";
import "./messageRecived.scss";
import Avatar from "../../../../common/Avatar/Avatar";

function MessageRecived({ text, first, profileImg }) {
  if (first) {
    return (
      <div className="chatTextColumn">
        <div className="chatTextColumn__textLineWithAvatar chatTextColumn__flexEnd">
          <p className="chatTextColumn__recivedText">{text}</p>
          <Avatar size={40} profileImg={profileImg} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="chatTextColumn">
        <div className="chatTextColumn__textLineRecievedWithoutAvatar chatTextColumn__flexEnd">
          <p className="chatTextColumn__recivedText">{text}</p>
        </div>
      </div>
    );
  }
}

export default MessageRecived;
