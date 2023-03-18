import { MessageStatus, Role } from 'src/app/core/constants/chat.constant';

export interface IChat {
  messages: IMessage[];
}

export interface IMessage {
  id?: string;
  content: string;
  sender: ISender;
  status: MessageStatus;
  date: string | Date;
}

export interface ISender {
  id?: string;
  image?: string;
  name: string;
  role: Role;
}
