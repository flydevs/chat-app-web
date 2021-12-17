import "./ChatHeader.scss";
import React from "react";
import Avatar from "../../../common/Avatar/Avatar";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import { HiInformationCircle } from "react-icons/hi";

type ChatHeaderProps = {
    profileImg: string,
    profileName: string,
    status: string,
    statusBubble: string
}

const ChatHeader = ({
    profileImg,
    profileName,
    status,
    statusBubble
}:ChatHeaderProps) => {
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

const NoChatSelected = () => {
    return (
        <div className="headerContainer">
            <div className="headerContainer__profileContainer">
                <IoIosPerson size={40}/>
                <div className="headerContainer__profileContainer__nameStatusContainer">
                    <h2 className="headerContainer__profileContainer__nameStatusContainer__chatTitle">Select a chat or start a new conversation</h2>
                </div>
            </div>
        </div>
    )
}

const NotLoggedHeader = () => {
    return (
        <div className="headerContainer">
            <div className="headerContainer__profileContainer">
                <HiInformationCircle size={40}/>
                <div className="headerContainer__profileContainer__nameStatusContainer">
                    <h2 className="headerContainer__profileContainer__nameStatusContainer__chatTitle">Login to access Chats</h2>
                </div>
            </div>
        </div>
    )
}

export {ChatHeader, NoChatSelected, NotLoggedHeader};