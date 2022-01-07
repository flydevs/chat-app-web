import { useEffect, useState, useRef, ReactNode, useContext } from "react";
import React from "react";
import { getConvers } from "../utils/back/conversutils";
import { getUsers } from "../utils/back/usersutils";
import { PrivateConvo, NewConvo,GroupConvo,objectInterface, getConversationsResponse, conversationWParticipants, uuid, userProfile, null_uuid, storageUsers } from "../utils/interfaces";
import { AuthContext } from "./AuthContext";

interface propsInterface {
  children: ReactNode;
}

const ConversationsContext = React.createContext<{
  users: storageUsers,
  conversations: (PrivateConvo | GroupConvo)[],
  selected: PrivateConvo | GroupConvo | NewConvo | undefined,
  setSelected: (arg0: PrivateConvo | GroupConvo) => void
}>({
  users: {},
  conversations: [],
  selected: undefined
  ,
  setSelected: (arg0: PrivateConvo | GroupConvo) => {}
});

const ConversationsProvider: React.FC<propsInterface> = ({ children }) => {
  const authInfo= useContext(AuthContext)
  const [users, setUsers] = useState<storageUsers>({});
  const [conversations, setConversations] = useState<(PrivateConvo | GroupConvo)[]>([]);
  const [selected, setSelected] = useState<PrivateConvo | GroupConvo | NewConvo | undefined>();
  const AuthCtx = useContext(AuthContext)
  let logged = AuthCtx.logged

  const [timeout, setTimeoutVariable] = useState<NodeJS.Timeout | null>(null)

  let fetch_AuthUser = true;
  const short_poll = async () => {
    const func = async () => {
        const convers = await getConvers(authInfo.userInfo);
        let classified_convos:(PrivateConvo | GroupConvo)[] = []
        let unknown_users: uuid[] = []
        convers.forEach((conver) => {
          conver.participants.forEach((user)=>{
            let user_stored: userProfile | undefined = users[user.user_uuid.uuid]
            if (user_stored == undefined && !(user.user_uuid.uuid in unknown_users)){
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

        if (fetch_AuthUser){
          unknown_users.push(authInfo.userInfo.uuid!)
          fetch_AuthUser = false
        }
        if (unknown_users.length > 0){
          const new_users = await getUsers(authInfo.userInfo,unknown_users);
          setUsers({...users, ...new_users})
        }
        setTimeoutVariable(null);
        setConversations(classified_convos);
    };
    func()
    }

  useEffect(() =>{
    const func = async () =>{
    if (timeout == null) {
      setTimeoutVariable(setTimeout(()=>{short_poll()}, 3000));
    }
  }
    func()
  }, [conversations])

  return (
    <ConversationsContext.Provider value={{ users, conversations, selected, setSelected }}>
      {children}
    </ConversationsContext.Provider>
  );
};

export { ConversationsProvider, ConversationsContext };
