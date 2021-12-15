const null_uuid_string = "0000000-00000000-00000"
const null_uuid:uuid = {uuid: null_uuid_string}

interface uuid{
  uuid: string
}

interface apiResponse{
  response: {
    status: number;
    message: string;
  }
}

interface userProfile{
  uuid: uuid,
  phone: string,
  first_name?: string,
  last_name?: string,
  user_name: string,
  description?: string,
  avatar_url?: string,
  created_at: number
}

interface getUserProfiles{
  response: apiResponse,
  data: userProfile[],
}

interface conversation{
    name?: string,
    uuid: uuid,
    avatar_url?:string,
    type: number,
    created_at: number,
    last_msg: message
  
}

interface userConversation{
  uuid: uuid,
  user_uuid: uuid,
  last_access_uuid: uuid,
  created_at: number
}

interface conversationWParticipants{
  conversation: conversation, user_conversation: userConversation, participants: userConversation[]
}

interface PrivateConvo extends conversationWParticipants{
  private: true
}

interface GroupConvo extends conversationWParticipants{
  private: false
}


interface getConversationsResponse {
  response: apiResponse,
  data: conversationWParticipants[]
}

interface message{
  uuid: uuid,
  conversation_uuid: uuid,
  author_uuid: uuid,
  text: string,
  created_at: number,
  updated_at: number
}

interface getMessagesResponse{
  response: apiResponse,
  data: message[]
}

interface objectInterface {
  firstName: string;
  lastName: string;
  createdAt: number;
  profileImg: string;
  message: string;
  unread: number;
  badges: {
    backgroundColor: string;
    color: string;
    text: string;
  };
  id: number;
}

interface contactsCardProps {
  profileImg: string;
  name: string;
  lastMessage: string;
  badges: {
    text: string;
    color: string;
    backgroundColor: string;
  }[];
  selected: string;
  timeAgo: number;
  toggleSelected: () => void;
  unread: number;
}
export {null_uuid_string,null_uuid}
export type {  PrivateConvo, GroupConvo, objectInterface, contactsCardProps, getConversationsResponse, conversationWParticipants, uuid, message, getMessagesResponse, userProfile, getUserProfiles };
