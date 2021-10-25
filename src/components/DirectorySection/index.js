import React from "react";
import MembersCards from "../MembersCards";
import "./directorySection.scss";
import { HiDotsVertical } from "react-icons/hi";

function DirectorySection() {
  return (
    <div className="DirectoryCont">
      <div className="DirectoryCont__head">
        <h2>Directory</h2>
        <button className="DirectoryCont__head__more">
          <HiDotsVertical className="DirectoryCont__head__more__icon" />
        </button>
      </div>
      <div className="DirectoryCont__main">
        <div className="DirectoryCont__main__flex">
          <h4>Team Members</h4>
          <div>6</div>
        </div>
        <div className="DirectoryCont__main__cards">
          <MembersCards />
          <MembersCards />
          <MembersCards />
          <MembersCards />
          <MembersCards />
        </div>
      </div>
      <div className="DirectoryCont__main">
        <div className="DirectoryCont__main__flex">
          <h4>Files</h4>
          <div>125</div>
        </div>
        <h1>Files willl be desplayed here</h1>
      </div>
    </div>
  );
}

export default DirectorySection;
{
}
