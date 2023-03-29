import { Injectable } from '@angular/core';
import { IChat } from '@app/core/interfaces/chat.interface';
import { IChats } from '@app/features/chats/interfaces/chats.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatsService implements IChats {
  viewChats(): IChat[] {
    return [];
  }
  createChat(): void {}
  deleteChat(): void {}
  deleteChats(): void {}
  editChatName(): void {}
}
