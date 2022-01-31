import React from "react";
import { BiHome, BiConversation, BiCalendarAlt } from "react-icons/bi";
import { HiOutlineChartPie } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import Avatar from "../common/Avatar/Avatar";
import "./Sidebar.scss";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__upperSection">
				<Avatar
					profileImg={"https://www.vidacolorpintores.com.ar/resources/img/profile/0000000086.png"}
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
			<FiSettings className="sidebar__settings" />
		</div>
	);
}

export default Sidebar;
