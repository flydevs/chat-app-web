import { useEffect, useState, useRef, ReactNode, useContext } from "react";
import React from "react";
import { getConvers } from "../utils/back/conversutils";
import { getUsers } from "../utils/back/usersutils";
import { PrivateConvo, GroupConvo,objectInterface, getConversationsResponse, conversationWParticipants, uuid, userProfile, null_uuid } from "../utils/interfaces";
import { AuthContext } from "./AuthContext";

interface propsInterface {
  children: ReactNode;
}

const ConversationsContext = React.createContext<{
  conversations: (PrivateConvo | GroupConvo)[],
  selected: PrivateConvo | GroupConvo | undefined,
  setSelected: (arg0: PrivateConvo | GroupConvo) => void
}>({
  conversations: [],
  selected: undefined
  ,
  setSelected: (arg0: PrivateConvo | GroupConvo) => {}
});

const ConversationsProvider: React.FC<propsInterface> = ({ children }) => {
  const authInfo= useContext(AuthContext)
  const [conversations, setConversations] = useState<(PrivateConvo | GroupConvo)[]>([]);
  const [selected, setSelected] = useState<PrivateConvo | GroupConvo | undefined>();
  const AuthCtx = useContext(AuthContext)
  let logged = AuthCtx.logged

  const short_poll = async () => {
    const func = async () => {
        console.log("short-polling")
        const convers = await getConvers(authInfo.userInfo);
        let classified_convos:(PrivateConvo | GroupConvo)[] = []
        let unknown_users: uuid[] = []
        convers.forEach((conver) => {
          conver.participants.forEach((user)=>{
            let user_stored = localStorage.getItem(user.user_uuid.uuid)
            if (user_stored == null && !(user.user_uuid.uuid in unknown_users)){
              unknown_users.push(user.user_uuid)
            }
          })
          if (conver.conversation.type == 1) {
            let transform_convo: PrivateConvo = {...conver, private:true}
            classified_convos.push(transform_convo)
          } else {
            let transform_convo: GroupConvo = {...conver, private:false}
            classified_convos.push(transform_convo)
          }
        })
        if (unknown_users.length > 0){
          await getUsers(authInfo.userInfo,unknown_users)
        }
        setConversations(classified_convos);
        setTimeout(()=>{func()}, 3000)
    };
    func()
    }
  useEffect(() => {
    if (logged) {
      short_poll()
    }
  }, [logged])
/*
  useEffect(() => {
    const func = async () => {
      const convers = await getConvers(authInfo.userInfo);
      let classified_convos:(PrivateConvo | GroupConvo)[] = []
      let unknown_users: uuid[] = []
      convers.forEach((conver) => {
        conver.participants.forEach((user)=>{
          let user_stored = localStorage.getItem(user.user_uuid.uuid)
          if (user_stored == null && !(user.user_uuid.uuid in unknown_users)){
            unknown_users.push(user.user_uuid)
          }
        })
        if (conver.conversation.type == 1) {
          let transform_convo: PrivateConvo = {...conver, private:true}
          classified_convos.push(transform_convo)
        } else {
          let transform_convo: GroupConvo = {...conver, private:false}
          classified_convos.push(transform_convo)
        }
      })
      if (unknown_users.length > 0){
        await getUsers(authInfo.userInfo,unknown_users)
      }
      setConversations(classified_convos);
    };
    func();
  }, []);
  */
  return (
    <ConversationsContext.Provider value={{ conversations, selected, setSelected }}>
      {children}
    </ConversationsContext.Provider>
  );
};

export { ConversationsProvider, ConversationsContext };
