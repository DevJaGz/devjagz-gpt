import { IChat } from '../../../core/interfaces/chat.interface';

export interface IChats {
  viewChats(): IChat[];
  createChat(): void;
  editChatName(): void;
  deleteChat(): void;
  deleteChats(): void;
}
