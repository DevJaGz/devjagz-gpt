import { IChat } from './chat.interface';

export interface IChats {
  viewChats(): IChat[];
  createChat(): void;
  editChatName(): void;
  deleteChat(): void;
  deleteChats(): void;
}
