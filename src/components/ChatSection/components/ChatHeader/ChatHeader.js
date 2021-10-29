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
            <div className="profileContainer">
                <Avatar size={40} profileImg={profileImg} />
                <div className="nameStatusContainer">
                    <h2 className="chatTitle">{profileName}</h2>
                    <div className="chatStatusContainer">
                        <div className="statusDot" style={{ backgroundColor: statusBubble }}></div>
                        <p className="status">{status}</p>
                    </div>
                </div>
            </div>
            <div className="callContainer">
                <BsFillTelephoneFill size={18} color={"#615EF0"} />
                <p className="call">Call</p>
            </div>
        </div>
    )
}

export default ChatHeader;