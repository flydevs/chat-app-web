import React from "react";
import "./messageSent.scss";
import Avatar from "../../../../common/Avatar/Avatar";


function MessageSent({
	text,
	first,
	profileImg
}) {
	if (first) {
		return (
			<div className="chatTextColumn">
				<div className="chatTextColumn__textLineWithAvatar">
					<Avatar size={40} profileImg={profileImg} />
					<p className="chatTextColumn__sentText">{text}</p>
				</div>
			</div>
		);
	}
	else {
		return (
			<div className="chatTextColumn">
				<div className="chatTextColumn__textLineWithoutAvatar">
					<p className="chatTextColumn__sentText">{text}</p>
				</div>
			</div>
		);
	}
}

export default MessageSent;