import { Injectable } from '@angular/core';
import { ISidebarItem } from '@app/features/chats/interfaces/chat-sidebar-item.interface';
import { IChat } from '../interfaces/chat.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatAdapter {
  toMenuItem(value: IChat): ISidebarItem {
    const adaptee: ISidebarItem = {
      id: value.id,
      label: value.name,
      svgPath: value.icon || 'assets/images/svg/icons/comment.svg',
    };
    return adaptee;
  }
}
