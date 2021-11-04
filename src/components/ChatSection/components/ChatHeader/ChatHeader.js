import "./ChatHeader.scss";
import React from "react";
import Avatar from "../../../common/Avatar/Avatar";
import { BsFillTelephoneFill } from "react-icons/bs";

function ChatHeader({
    profileImg,
    profileName,
    status,
    statusBubble
}) {
    return (
        <div className="headerContainer">
            <div className="headerContainer__profileContainer">
                <Avatar size={40} profileImg={profileImg} />
                <div className="headerContainer__profileContainer__nameStatusContainer">
                    <h2 className="headerContainer__profileContainer__nameStatusContainer__chatTitle">{profileName}</h2>
                    <div className="headerContainer__profileContainer__nameStatusContainer__chatStatusContainer">
                        <div className="headerContainer__profileContainer__nameStatusContainer__chatStatusContaine__statusDot" style={{ backgroundColor: statusBubble }}></div>
                        <p className="headerContainer__profileContainer__nameStatusContainer__chatStatusContaine__status">{status}</p>
                    </div>
                </div>
            </div>
            <div className="headerContainer__callContainer">
                <BsFillTelephoneFill size={18} color={"#615EF0"} />
                <p className="headerContainer__callContainer__call">Call</p>
            </div>
        </div>
    )
}

export default ChatHeader;