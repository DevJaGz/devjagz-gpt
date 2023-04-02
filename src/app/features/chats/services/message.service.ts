import { Injectable } from '@angular/core';
import { MessageRepository } from '@app/features/chats/repositories/message.repository';

@Injectable()
export class MessageService implements MessageRepository {
  editMessage(): void {}
}
