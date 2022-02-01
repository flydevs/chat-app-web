import React from "react";
import "./MembersCards.scss";
import Avatar from "../../../common/Avatar/Avatar";

const MembersCards: React.FC = () => {
	return (
		<div className="memberCard">
			<Avatar
				profileImg={
					"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				}
				size={48}
			/>
			<div className="memberCard__infoFlex">
				<h5>Florencio Dorrance</h5>
				<p>Market Development Manager</p>
			</div>
		</div>
	);
};

export default MembersCards;
