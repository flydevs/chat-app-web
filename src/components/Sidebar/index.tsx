import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiHome, BiConversation, BiCalendarAlt } from "react-icons/bi";
import { HiOutlineChartPie, HiLogin, HiLogout } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import Avatar from "../common/Avatar/Avatar";
import "./Sidebar.scss";
import { AuthContext } from "../../stores/AuthContext";
import { storageUsers, userProfile } from "../../utils/interfaces";
import { LogoutHandle } from "../AuthSection/Logout/Logout";

const ChangePage = () => {

}

type SidebarProps= {
  selected: string
}

const Sidebar = ({selected}:SidebarProps) => {
  const AuthCtx =useContext(AuthContext)
  const logged = AuthCtx.logged
  let users_prof: userProfile | undefined
  let users_string = localStorage.getItem("user")
  if (users_string != null){
  let users:storageUsers = JSON.parse(users_string!) 
  users_prof = users[AuthCtx.userInfo.uuid?.uuid!]
  }

  return (
    <div className="sidebar">
      <div className="sidebar__uppersection">
        <Avatar
          profileImg={logged ? users_prof?.avatar_url : undefined}
          size={48}
        />
        <div className="sidebar__uppersection__tabs">
          {logged ? <HiLogout className="sidebar__uppersection__tabs__tab" onClick={() => {
            LogoutHandle(AuthCtx.setLogged)
          }} id={"login"}/> : <Link to="/login"><HiLogin className={"sidebar__uppersection__tabs__tab"+ (selected == "login" ? " selected" : "")} id={"login"}/></Link>}
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
