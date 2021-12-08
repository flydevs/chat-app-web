interface uuid{
  uuid: string
}

interface apiResponse{
  data: {
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
    last_msg_uuid: uuid
  
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

export type { objectInterface, contactsCardProps, getConversationsResponse, conversationWParticipants, uuid, message, getMessagesResponse, userProfile, getUserProfiles };
