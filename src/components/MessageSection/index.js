import React from 'react'
import './MessageSection.scss'
function MessageSection() {
    return (
        <div className='messages'>
            <div className="messages__header">
                <h1 className="messages__header__title">
                    Messages
                </h1>
                <span className="messages__header_dropdownIcon">
                    v
                </span>
                <button className="messages__header__plusButton">
                    +
                </button>
            </div>
        </div>
    )
}

export default MessageSection
