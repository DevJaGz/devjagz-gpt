import { IMessage } from '../../../core/interfaces/chat.interface';

export interface IChat {
  viewMessages(): IMessage[];
  sendMessage(): void;
  editMessage(): void;
}
