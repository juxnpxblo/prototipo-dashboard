export type StatusType = 'open' | 'pending' | 'closed';

export type Tickets = Array<{
  id: number;
  status: StatusType;
  unreadMessages: number;
  lastMessage: string;
  isGroup: boolean;
  statusChatEnd: string;
  userId: number;
  contactId: number;
  whatsappId: number;
  queueId: number;
  createdAt: string;
  updatedAt: string;
  contact: {
    id: number;
    name: string;
    number: string;
    profilePicUrl: string;
  };
  queue: {
    id: number;
    name: string;
    color: string;
  };
}>;
