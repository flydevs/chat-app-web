import { useEffect, useState, useRef, ReactNode } from "react";
import React from "react";
import { getConvers } from "../utils/back/conversutils";
import { getUsers } from "../utils/back/usersutils";
import { objectInterface, getConversationsResponse, conversationWParticipants, uuid, userProfile } from "../utils/interfaces";

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
    conversation: {uuid: {uuid: "000000-00000000000-000000"}, type: 1, created_at: 0, last_msg_uuid: {uuid: "0000000-00000000-00000"}},
    user_conversation: {uuid: {uuid: "000000-00000000000-000000"}, user_uuid: {uuid: "000000-00000000000-000000"}, last_access_uuid: {uuid: "000000-00000000000-000000"}, created_at: 0},
    participants: []
  }
  ,
  setSelected: (arg0: conversationWParticipants) => {}
});

const ConversationsProvider: React.FC<propsInterface> = ({ children }) => {
  const [conversations, setConversations] = useState<conversationWParticipants[]>([]);
  const [selected, setSelected] = useState<conversationWParticipants>();

  useEffect(() => {
//NOTE: 2 forEach, kind of ugly. Also participants maybe shouldnt contain the first user.
//Gets conversation, checks type, if type 1 (a 1 on 1 conversation) replaces conversation details with the details of the user. This is probably not a very good approach.
    const func = async () => {
      const convers = await getConvers();
      setConversations(convers);
      let unknown_users: uuid[] = []
      convers.forEach((conver) => {
        conver.participants.forEach((user)=>{
          let user_stored = localStorage.getItem(user.user_uuid.uuid)
          if (user_stored == null && !(user.user_uuid.uuid in unknown_users)){
            unknown_users.push(user.user_uuid)
          }
        })
      })
      if (unknown_users.length > 0){
        await getUsers(unknown_users)
      }
      convers.forEach((conver)=>{
        if (conver.conversation.type == 1){
          let user_string = localStorage.getItem(conver.participants[1].user_uuid.uuid)
          let user: userProfile = JSON.parse(user_string!)
          let name = (user.first_name == undefined ? "" : (user.first_name + " ")) + (user.last_name == undefined ? "" : user.last_name)
          conver.conversation.name = name
          conver.conversation.avatar_url = user.avatar_url
        }
      })
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
