import { IMessage } from './message.interface';

export interface IChat {
  name: string;
  viewMessages(): IMessage[];
  sendMessage(): void;
  editMessage(): void;
}
