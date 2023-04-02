import { Chats } from '@app/features/chats/interfaces/chats.interface';

export abstract class ChatsListRepository {
  abstract createChat(): void;
  abstract deleteChat(): void;
  abstract deleteChats(): void;
  abstract editChatName(): void;
  abstract viewChats(): Chats;
}
