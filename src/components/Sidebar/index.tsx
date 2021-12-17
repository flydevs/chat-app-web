import React from "react";
import { Link } from "react-router-dom";
import { BiHome, BiConversation, BiCalendarAlt } from "react-icons/bi";
import { HiOutlineChartPie, HiLogin } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import Avatar from "../common/Avatar/Avatar";
import "./Sidebar.scss";

const ChangePage = () => {

}

type SidebarProps= {
  selected: string
}

const Sidebar = ({selected}:SidebarProps) => {
  return (
    <div className="sidebar">
      <div className="sidebar__uppersection">
        <Avatar
          profileImg={`https://www.vidacolorpintores.com.ar/resources/img/profile/0000000086.png`}
          size={48}
        />
        <div className="sidebar__uppersection__tabs">
          <Link to="/login"><HiLogin className={"sidebar__uppersection__tabs__tab"+ (selected == "login" ? " selected" : "")} id={"login"}/></Link>
          <BiHome className={"sidebar__uppersection__tabs__tab"+ (selected == "home" ? " selected" : "")} id={"home"} />
          <Link to="/"><BiConversation className={"sidebar__uppersection__tabs__tab"+ (selected == "chat" ? " selected" : "")} id={"chat"} /></Link>
          <HiOutlineChartPie className={"sidebar__uppersection__tabs__tab"+ (selected == "charts" ? " selected" : "")} id={"charts"} />
          <AiOutlineSearch className={"sidebar__uppersection__tabs__tab"+ (selected == "search" ? " selected" : "")} id={"search"} />
          <BiCalendarAlt className={"sidebar__uppersection__tabs__tab"+ (selected == "calendar" ? " selected" : "")} id={"calendar"} />
        </div>
      </div>
      <FiSettings className="sidebar__settings" />
    </div>
  );
}

export {Sidebar}
