import {
  MessageEmmiter,
  MessageStatus,
} from '@app/features/chats/constants/message.constant';

export interface IMessage {
  sender: MessageEmmiter;
  status: MessageStatus;
  content: string;
}
