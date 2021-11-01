import React, { useContext, useState, useEffect } from "react";
import "./MessageSection.scss";
import { BsChevronDown } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import ContactsCard from "./components/ContactsCard/ContactsCard";
import { ConversationsContext } from "../../stores/ConversationsContext";

function MessageSection() {
  const objeto = useContext(ConversationsContext);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const regSearch = new RegExp(search, "i");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const toggleSelected = (name) => {
    //TODO: UPDATE TO USE USER UUID WHEN API READY
    setSelected(name);
  };

  useEffect(() => {
    //without this first render would give undefined on conversations array since async is not completed
    if (search === "") {
      setResults(
        objeto.conversations
          .sort(function (a, b) {
            const date1 = new Date(a);
            const date2 = new Date(b);
            return date1 - date2;
          })
          .reverse()
      );
    }
  }, [objeto.conversations]);

  useEffect(() => {
    if (search != "") {
      //compares search parameter and conversations names to find matches and render those convs.
      const results = objeto.conversations
        .filter((obj) => regSearch.test(obj.firstName + obj.lastName))
        .sort(function (a, b) {
          const date1 = new Date(a);
          const date2 = new Date(b);
          return date1 - date2;
        })
        .reverse();

      setResults(results);
    } else {
      setResults(objeto.conversations);
    }
  }, [search]);

  return (
    <div className="messages">
      <div className="messages__header">
        <div className="messages__header__title">
          <h2 className="messages__header__title__h2">Messages</h2>
          <span className="messages__header__title__dropdownIcon">
            <BsChevronDown size={12} />
          </span>
          <span className="messages__header__title__badge">
            {objeto.conversations.length}
          </span>
        </div>
        <button className="messages__header__plusButton">+</button>
      </div>

      <div className="messages__searchBar">
        <div className="messages__searchBar__lupa">
          <RiSearchLine />
        </div>
        <input
          onChange={handleSearchChange}
          type="search"
          placeholder="Search messages"
        />
      </div>
      <div className="messages__container">
        <div className="messages__container__inner">
          {results.length > 0 ? (
            results.map((conver, i) => (
              <ContactsCard
                key={i}
                timeAgo={conver.createdAt}
                selected={
                  conver.firstName + conver.lastName === selected
                    ? "selected"
                    : ""
                }
                lastMessage={conver.message}
                firstName={conver.firstName}
                lastName={conver.lastName}
                profileImg={conver.profileImg}
                unread={conver.unread ? "unread" : ""}
                toggleSelected={() =>
                  toggleSelected(conver.firstName + conver.lastName)
                }
                badges={[
                  {
                    text: "Question",
                    color: "orange",
                    backgroundColor: "rgba(254, 235, 200, 1)"
                  },
                  {
                    text: "Help wanted",
                    color: "rgba(56, 161, 105, 1)",
                    backgroundColor: "rgba(198, 246, 213, 1)"
                  }
                ]}
              />
            ))
          ) : (
            <h3 className="messages__container__inner__nochats">
              No chats found.
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default MessageSection;
