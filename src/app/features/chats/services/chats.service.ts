import { Injectable } from '@angular/core';
import { IChats } from '@app/features/chats/interfaces/chats.interface';
import { IChat } from '../interfaces/chat.interface';

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
