import React from "react";
import "./directorySection.scss";

function DirectorySection() {
  return (
    <div className="DirectoryCont">
      <div className="DirectoryCont__head">
        <h2>Directory</h2>
        <div>
          <p>...</p>
        </div>
      </div>
      <div className="DirectoryCont__main">
        <div className="DirectoryCont__main__flex">
          <h4>Team Members</h4>
          <div>6</div>
        </div>
        <h1>cards will display here</h1>
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
