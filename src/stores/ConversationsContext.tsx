import { useEffect, useState, ReactNode } from "react";
import React from "react";
import { getConvers } from "../utils/conversutils";
import { objectInterface } from "../utils/interfaces";

interface propsInterface {
  children: ReactNode;
}

const ConversationsContext = React.createContext<{
  conversations: objectInterface[];
}>({
  conversations: [
    {
      firstName: "",
      lastName: "",
      id: 0,
      unread: 0,
      message: "",
      profileImg: "",
      createdAt: 0,
      badges: {
        text: "",
        color: "",
        backgroundColor: ""
      }
    }
  ]
});

const ConversationsProvider: React.FC<propsInterface> = ({ children }) => {
  const [conversations, setConversations] = useState<objectInterface[]>([]);

  useEffect(() => {
    const func = async () => {
      const convers = await getConvers();
      setConversations(convers);
    };

    func();
  }, []);
  return (
    <ConversationsContext.Provider value={{ conversations }}>
      {children}
    </ConversationsContext.Provider>
  );
};

export { ConversationsProvider, ConversationsContext };
