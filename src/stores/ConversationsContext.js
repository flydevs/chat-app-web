import { useEffect, useState } from "react";
import React from "react";
import { getConvers } from "../utils/conversutils";

const ConversationsContext = React.createContext();

const ConversationsProvider = ({ children }) => {
  const [conversations, setConversations] = useState([{}]);

  useEffect(() => {
    const func = async () => {
      const convers = await getConvers();
      await setConversations(convers);
    };

    func();
  }, []);
  return (
    <ConversationsContext.Provider value={{ conversations, setConversations }}>
      {children}
    </ConversationsContext.Provider>
  );
};

export { ConversationsProvider, ConversationsContext };