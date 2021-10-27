import React from "react";
import { BiHome, BiConversation, BiCalendarAlt } from "react-icons/bi";
import { GrPieChart } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import Avatar from "../common/Avatar/Avatar";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__uppersection">
        <Avatar
          profileImg={`https://www.vidacolorpintores.com.ar/resources/img/profile/0000000086.png`}
          size={48}
        />
        <div className="sidebar__uppersection__tabs">
          <BiHome />
          <BiConversation className="selected" />
          <GrPieChart />
          <AiOutlineSearch />
          <BiCalendarAlt />
        </div>
      </div>
      <FiSettings className="sidebar__settings" />
    </div>
  );
}

export default Sidebar;
