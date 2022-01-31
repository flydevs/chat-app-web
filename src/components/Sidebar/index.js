import React from "react";
import { BiHome, BiConversation, BiCalendarAlt, BiPowerOff } from "react-icons/bi";
import { HiOutlineChartPie } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import Avatar from "../common/Avatar/Avatar";
import "./Sidebar.scss";
import { connect } from "react-redux";
import {doLogout} from '../../actions/auth'

function Sidebar({doLogout}) {
  return (
    <div className="sidebar">
      <div className="sidebar__uppersection">
        <Avatar
          profileImg={`https://www.vidacolorpintores.com.ar/resources/img/profile/0000000086.png`}
          size={48}
        />
        <div className="sidebar__uppersection__tabs">
          <BiHome className="sidebar__uppersection__tabs__tab" />
          <BiConversation className="sidebar__uppersection__tabs__tab selected" />
          <HiOutlineChartPie className="sidebar__uppersection__tabs__tab" />
          <AiOutlineSearch className="sidebar__uppersection__tabs__tab" />
          <BiCalendarAlt className="sidebar__uppersection__tabs__tab" />
        </div>
      </div>

      <div  className="sidebar__bottom">
      <BiPowerOff onClick={doLogout} className="sidebar__bottom__off" />
      <FiSettings className="sidebar__bottom__settings" />
      </div>
      
    </div>
  );
}

export default connect(null, {doLogout})(Sidebar);
