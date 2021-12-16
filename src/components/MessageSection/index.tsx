import React, { useContext, useState, useEffect } from "react";
import "./MessageSection.scss";
import { BsChevronDown } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import ContactsCard from "./components/ContactsCard/ContactsCard";
import { ConversationsContext } from "../../stores/ConversationsContext";
import { PrivateConvo, GroupConvo, objectInterface, conversationWParticipants, userProfile } from "../../utils/interfaces";
import { randomNum } from "../../utils/back/conversutils";
import { AuthContext } from "../../stores/AuthContext";

const MessageSection: React.FC = () => {
  const objeto = useContext(ConversationsContext);
  const authInfo = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<(PrivateConvo | GroupConvo)[]>([]);
  const [selected, setSelected] = [objeto.selected, objeto.setSelected];
  const regSearch = new RegExp(search, "i");

  //console.log(objeto);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
//This gives the whole conversation, which allows to ChatHeader to get the conversation info there (later might change to just use uuid)
  const toggleSelected = (contact: PrivateConvo | GroupConvo) => {
    //TODO: UPDATE TO USE USER UUID WHEN API READY
    setSelected(contact);
  };

  useEffect(() => {
    //without this first render would give undefined on conversations array since async is not completed
    if (search === "") {
      setResults(
        objeto.conversations
          .sort((a: PrivateConvo | GroupConvo, b: PrivateConvo | GroupConvo) => {
            const date1: number = a.conversation.last_msg.created_at != null ? a.conversation.last_msg.created_at : a.conversation.created_at;
            const date2: number = b.conversation.last_msg.created_at != null ? b.conversation.last_msg.created_at : b.conversation.created_at;
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
        .filter((obj: PrivateConvo | GroupConvo) =>
          regSearch.test(obj.conversation.name! + obj.conversation.name!)
        )
        .sort((a: PrivateConvo | GroupConvo, b: PrivateConvo | GroupConvo) => {
          const date1: number = a.conversation.last_msg.created_at != null ? a.conversation.last_msg.created_at : a.conversation.created_at;
          const date2: number = b.conversation.last_msg.created_at != null ? b.conversation.last_msg.created_at : b.conversation.created_at;
          return date1 - date2;
        })
        .reverse();

      setResults(results);
    } else {
      setResults(objeto.conversations);
    }
  }, [search]);

  return (
    <div data-testid="messages" className="messages">
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
        <div data-testid="container" className="messages__container__inner">
          {results.length > 0 ? (
            results.map((conver: PrivateConvo | GroupConvo, i: number) => {
              let user: userProfile | undefined
              if (conver.private) {
              let user_string = localStorage.getItem(conver.participants[0].user_uuid.uuid)
              if (user_string != null){
              user = conver.private ? JSON.parse(user_string) : undefined
              }
              }
            //  console.log("This is where private should appear")
              return (<ContactsCard
                key={i}
                timeAgo={conver.conversation.last_msg.created_at}
                selected={
                  //Later change this to use the uuid
                  selected &&
                  conver.conversation.uuid.uuid === selected.conversation.uuid.uuid
                    ? "selected"
                    : ""
                }
                lastMessage={conver.conversation.last_msg.text}
                name={conver.private ? (user?.first_name!) + (user?.last_name!) : conver.conversation.name!}
                profileImg={conver.private ? user?.avatar_url! : conver.conversation.avatar_url!}
                unread={randomNum(-5, 12)}
                toggleSelected={() =>
                  toggleSelected(conver)
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
              />)
              })
          ) : (
            <h3 className="messages__container__inner__nochats">
              No chats found.
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
