import React from "react";
import MembersCards from "./components/MembersCards";
import "./directorySection.scss";
import { HiDotsVertical } from "react-icons/hi";
import FilesCard from "./components/FilesCard";

function DirectorySection() {
  return (
    <div className="directoryCont">
      <div className="directoryCont__head">
        <h2>Directory</h2>
        <button data-testid="MoreButton" className="directoryCont__head__more">
          <HiDotsVertical className="directoryCont__head__more__icon" />
        </button>
      </div>
      <div className="directoryCont__main">
        <div className="directoryCont__main__flex">
          <h4>Team Members</h4>
          <div>6</div>
        </div>
        <div className="directoryCont__main__cards">
          <MembersCards />
          <MembersCards />
          <MembersCards />
          <MembersCards />
          <MembersCards />
        </div>
      </div>
      <div className="directoryCont__main">
        <div className="directoryCont__main__flex">
          <h4>Files</h4>
          <div>125</div>
        </div>
        <div className="directoryCont__main__cards">
          <FilesCard type="png"></FilesCard>
          <FilesCard type="word"></FilesCard>
          <FilesCard type="png"></FilesCard>
          <FilesCard type="pdf"></FilesCard>
          <FilesCard type="pdf"></FilesCard>
          <FilesCard type="psfsdf"></FilesCard>
        </div>
      </div>
    </div>
  );
}

export default DirectorySection;
