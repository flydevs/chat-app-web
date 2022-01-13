import React from "react";

interface propsInterface {
  profileImg?: string;
  size: number;
}

const Avatar: React.FC<propsInterface> = ({ profileImg, size }) => {
  return (
    <div
      className="avatar"
      style={{
        width: size,
        height: size,
        overflow: "hidden",
        borderRadius: 12
      }}
    >
      <img
        src={!(profileImg || profileImg == "") ? "./images/default-avatar.png" : profileImg }
        alt="avatar"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        id="chatHeaderProfileImg"
      />
    </div>
  );
};

export default Avatar;
