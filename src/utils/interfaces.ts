interface objectInterface {
  firstName: string;
  lastName: string;
  createdAt: number;
  profileImg: string;
  message: string;
  unread: boolean;
  badges: {
    backgroundColor: string;
    color: string;
    text: string;
  };
  id: number;
}

interface contactsCardProps {
  profileImg: string;
  firstName: string;
  lastName: string;
  lastMessage: string;
  badges: {
    text: string;
    color: string;
    backgroundColor: string;
  }[];
  selected: string;
  timeAgo: number;
  toggleSelected: () => void;
  unread: string;
}

export type { objectInterface, contactsCardProps };
