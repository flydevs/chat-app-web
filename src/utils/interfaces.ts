interface uuid{
  uuid: string
}

interface apiResponse{
  data: {
    status: number;
    message: string;
  }
}

interface apiConversation{
    name?: string,
    uuid: uuid,
    avatarUrl?:string,
    type: number,
    createdAt: number,
    lastMsgUuid: uuid
  
}

interface userConversation{
  uuid: uuid,
  userUuid: uuid,
  lastAccessUuid: uuid,
  createdAt: number
}

interface userProfile{
  phone: string,
  firstName: string,
  lastName: string,
  userName: string,
  description: string,
  avatarUrl: string,
  createdAt: number
}

interface conversationWParticipants{
  conversation: apiConversation, userConversation: userConversation, participants: userConversation[]
}

interface getConversationsResponse {
  response: apiResponse,
  data: conversationWParticipants[]
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

export type { objectInterface, contactsCardProps, getConversationsResponse, conversationWParticipants, uuid };
