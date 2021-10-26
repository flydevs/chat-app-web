import "./ChatHeader.scss";
import React from "react";
import Avatar from "../../../common/Avatar/Avatar";
import {BsFillTelephoneFill} from "react-icons/bs";

function ChatHeader() {
    return(
        <div className="headerContainer">
            <div className="profileContainer">
            <Avatar size={40} profileImg={`https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg`} />
            <div className="nameStatusContainer">
                <h2 className="chatTitle">Florencio Dorrance</h2>
                <div className="chatStatusContainer">
                    <div className="statusDot"></div>
                    <p className="status">Online</p>
                </div>
            </div>
            </div>
            <div className="callContainer">
                <BsFillTelephoneFill size={18} color={"#615EF0"}/>
                <p className="call">Call</p>
            </div>
        </div>
    )
}

export default ChatHeader;