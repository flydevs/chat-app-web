import React from "react";

function Avatar({ profileImg, size }) {
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
        src={profileImg}
        alt="avatar"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default Avatar;
