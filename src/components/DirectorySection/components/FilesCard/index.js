import React, { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import {
  AiOutlineFileImage,
  AiOutlineFileWord,
  AiOutlineFilePdf,
} from "react-icons/ai";
import "./FilesCard.scss";

const FilesCard = ({ type }) => {
  const [icon, seticon] = useState("");

  useEffect(() => {
    if (type == "png") {
      seticon(
        <AiOutlineFileImage className="FileCard__ImgContainer__FilePic" />
      );
    } else if (type == "pdf") {
      seticon(<AiOutlineFilePdf className="FileCard__ImgContainer__FilePic" />);
    } else if (type == "word") {
      seticon(
        <AiOutlineFileWord className="FileCard__ImgContainer__FilePic" />
      );
    }
  }, [type]);

  return (
    <div className="FileCard">
      <div className={`FileCard__ImgContainer FileCard__ImgContainer--${type}`}>
        {icon}
      </div>
      <div className="FileCard__InfoFlex">
        <h5>file number-i923.{type}</h5>
        <p>{type} 4mb</p>
      </div>

      <button className="FileCard__Download">
        <BsDownload className="FileCard__Download__Icon" />
      </button>
    </div>
  );
};

export default FilesCard;
