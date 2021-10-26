import React from 'react';
import "./messageRecived.scss";
import Avatar from '../../../../common/Avatar/Avatar';

function MessageRecived({
    text,
    first,
    profileImg
}) {
    if(first) {
        return(
            <div className="chatTextColumn">
                <div className="textLineWithAvatar flexEnd">
                    <p className="recivedText">{text}</p>
                    <Avatar size={40} profileImg={profileImg} />
                </div>
               
            </div>
        )
    }
    else {
        return(
            <div className="chatTextColumn">
                <div className="textLineRecievedWithoutAvatar flexEnd">
                <p className="recivedText">{text}</p>
                </div>
            </div>
        )
    }
}

export default MessageRecived;

