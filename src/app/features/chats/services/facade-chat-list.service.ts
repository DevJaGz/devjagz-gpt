import { Injectable } from '@angular/core';
import { Chats } from '@app/features/chats/interfaces/chats.interface';

import { ChatsListRepository } from '@app/features/chats/repositories/chats-list.repository';

@Injectable()
export class ChatListFacadeService {
  constructor(private repository: ChatsListRepository) {}

  viewChats(): Chats {
    return this.repository.viewChats();
  }
}
