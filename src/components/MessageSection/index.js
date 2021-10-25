import React from 'react'
import './MessageSection.scss'
import { BsChevronDown } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import ContactsCard from './components/ContactsCard/ContactsCard';



function MessageSection() {
    return (
        <div className='messages'>
            <div className="messages__header">
                <div className="messages__header__title">
                    <h2 className="messages__header__title__h2">
                        Messages
                    </h2>
                    <span className="messages__header__title__dropdownIcon">
                        <BsChevronDown size={12} />
                    </span>
                    <span className="messages__header__title__badge">
                        12
                    </span>
                </div>
                <button className="messages__header__plusButton">
                    +
                </button>
            </div>
            <div className="messages__searchBar">
                <div className="messages__searchBar__lupa">
                    <RiSearchLine />
                </div>
                <input type="search" placeholder='Search messages' />
            </div>
            <div className="messages__contactsSection">
                <ContactsCard timeAgo={"15m"} selected={"selected"} badges={[{ "text": "Question", "color": "orange", "backgroundColor": "rgba(254, 235, 200, 1)" }, { "text": "Help wanted", "color": "rgba(56, 161, 105, 1)", "backgroundColor": "rgba(198, 246, 213, 1)" }]} lastMessage="Haha oh man 🔥" contactName="Elmer Laverty" profileImg={`https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg`} />
                <ContactsCard timeAgo={"15m"} selected={"nan"} badges={[{ "text": "Question", "color": "orange", "backgroundColor": "rgba(254, 235, 200, 1)" }, { "text": "Help wanted", "color": "rgba(56, 161, 105, 1)", "backgroundColor": "rgba(198, 246, 213, 1)" }]} lastMessage="Haha oh man 🔥" contactName="Elmer Laverty" profileImg={`https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg`} />
                <ContactsCard timeAgo={"15m"} selected={"nan"} badges={[{ "text": "Question", "color": "orange", "backgroundColor": "rgba(254, 235, 200, 1)" }, { "text": "Help wanted", "color": "rgba(56, 161, 105, 1)", "backgroundColor": "rgba(198, 246, 213, 1)" }]} lastMessage="Haha oh man 🔥" contactName="Elmer Laverty" profileImg={`https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg`} />
                <ContactsCard timeAgo={"15m"} selected={"nan"} badges={[{ "text": "Question", "color": "orange", "backgroundColor": "rgba(254, 235, 200, 1)" }, { "text": "Help wanted", "color": "rgba(56, 161, 105, 1)", "backgroundColor": "rgba(198, 246, 213, 1)" }]} lastMessage="Haha oh man 🔥" contactName="Elmer Laverty" profileImg={`https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg`} />
                <ContactsCard timeAgo={"15m"} selected={"nan"} badges={[{ "text": "Question", "color": "orange", "backgroundColor": "rgba(254, 235, 200, 1)" }, { "text": "Help wanted", "color": "rgba(56, 161, 105, 1)", "backgroundColor": "rgba(198, 246, 213, 1)" }]} lastMessage="Haha oh man 🔥" contactName="Elmer Laverty" profileImg={`https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg`} />
                <ContactsCard timeAgo={"15m"} selected={"nan"} badges={[{ "text": "Question", "color": "orange", "backgroundColor": "rgba(254, 235, 200, 1)" }, { "text": "Help wanted", "color": "rgba(56, 161, 105, 1)", "backgroundColor": "rgba(198, 246, 213, 1)" }]} lastMessage="Haha oh man 🔥" contactName="Elmer Laverty" profileImg={`https://image.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg`} />
            </div>
        </div>
    )
}

export default MessageSection
