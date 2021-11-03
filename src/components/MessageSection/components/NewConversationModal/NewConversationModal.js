import React from "react";
import "./NewConversationModal.scss";
import { MdClose } from "react-icons/md";
import MembersCards from "../../../DirectorySection/components/MembersCards";

export const NewConversationModal = ({
  showConversationModal,
  setShowConversationModal
}) => {
  return (
    <>
      {showConversationModal ? (
        <div className="modal__wrapper">
          <div className="modal">
            <div className="modal__header">
              <h2 className="modal__header__title">Start a New Conversation</h2>
              <MdClose
                onClick={() => setShowConversationModal((prev) => !prev)}
                className="modal__header__close"
                size={25}
              />
            </div>
            <div className="modal__body">
              <h2 className="modal__body__title"> Select a Team Member: </h2>
              <div className="modal__body__contactsContainer">
                <MembersCards></MembersCards>
                <MembersCards></MembersCards>
                <MembersCards></MembersCards>
                <MembersCards></MembersCards>
              </div>
            </div>
            <div className="modal__footer">
              <button className="modal__footer__button create">Create</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
