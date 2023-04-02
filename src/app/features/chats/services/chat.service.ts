import { Injectable } from '@angular/core';
import { Messages } from '@app/features/chats/interfaces/messages.interface';
import { ChatRepository } from '@app/features/chats/repositories/chat.repository';

@Injectable()
export class ChatService implements ChatRepository {
  viewMessages(): Messages {
    return [];
  }
  sendMessage(): void {}
}
