import { Messages } from '@app/features/chats/interfaces/messages.interface';

export abstract class ChatRepository {
  abstract viewMessages(): Messages;
  abstract sendMessage(): void;
}
