import { useEffect, useState, useRef, ReactNode } from "react";
import React from "react";
import { getConvers } from "../utils/conversutils";
import { objectInterface, getConversationsResponse, conversationWParticipants } from "../utils/interfaces";

interface propsInterface {
  children: ReactNode;
}

const ConversationsContext = React.createContext<{
  conversations: conversationWParticipants[],
  selected: conversationWParticipants | undefined,
  setSelected: (arg0: conversationWParticipants) => void
}>({
  conversations: [
  ],
  selected:  {
    conversation: {uuid: {uuid: "000000-00000000000-000000"}, type: 1, createdAt: 0, lastMsgUuid: {uuid: "0000000-00000000-00000"}},
    userConversation: {uuid: {uuid: "000000-00000000000-000000"}, userUuid: {uuid: "000000-00000000000-000000"}, lastAccessUuid: {uuid: "000000-00000000000-000000"}, createdAt: 0},
    participants: []
  }
  ,
  setSelected: (arg0: conversationWParticipants) => {}
});

const ConversationsProvider: React.FC<propsInterface> = ({ children }) => {
  const [conversations, setConversations] = useState<conversationWParticipants[]>([]);
  const [selected, setSelected] = useState<conversationWParticipants>();

  useEffect(() => {
    const func = async () => {
      const convers = await getConvers();
      setConversations(convers);
    };

    func();
  }, []);
  return (
    <ConversationsContext.Provider value={{ conversations, selected, setSelected }}>
      {children}
    </ConversationsContext.Provider>
  );
};

export { ConversationsProvider, ConversationsContext };
