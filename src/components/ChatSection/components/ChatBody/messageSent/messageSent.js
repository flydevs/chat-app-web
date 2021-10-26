import React from 'react';
import "./messageSent.scss";
import Avatar from '../../../../common/Avatar/Avatar';


function MessageSent({
    text,
    first,
    profileImg
}) {
    console.log(first)
    if(first) {
        return(
            <div className="chatTextColumn">
                <div className="textLineWithAvatar">
                    <Avatar size={40} profileImg={profileImg} />
                    <p className="sentText">{text}</p>
                </div>
            </div>
        )
    }
    else {
        return( 
            <div className="chatTextColumn">
                <div className="textLineWithoutAvatar">
                    <p className="sentText">{text}</p>
                </div>
            </div>
        )
    }
}

export default MessageSent;