import React, { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import {
  AiOutlineFileImage,
  AiOutlineFileWord,
  AiOutlineFilePdf,
  AiOutlineFileText
} from "react-icons/ai";
import "./FilesCard.scss";

interface propsInterface {
  type: string;
}

const FilesCard: React.FC<propsInterface> = ({ type }) => {
  const [icon, seticon] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (type == "png") {
      seticon(
        <AiOutlineFileImage className="fileCard__imgContainer__filePic" />
      );
    } else if (type == "pdf") {
      seticon(<AiOutlineFilePdf className="fileCard__imgContainer__filePic" />);
    } else if (type == "word") {
      seticon(
        <AiOutlineFileWord className="fileCard__imgContainer__filePic" />
      );
    } else {
      seticon(
        <AiOutlineFileText className="fileCard__imgContainer__filePic" />
      );
    }
  }, [type]);

  return (
    <div className="fileCard">
      <div className={`fileCard__imgContainer fileCard__imgContainer--${type}`}>
        {icon}
      </div>
      <div className="fileCard__infoFlex">
        <h5>file number-i923.{type}</h5>
        <p>{type} 4mb</p>
      </div>

      <button className="fileCard__download">
        <BsDownload className="fileCard__download__icon" />
      </button>
    </div>
  );
};

export default FilesCard;
