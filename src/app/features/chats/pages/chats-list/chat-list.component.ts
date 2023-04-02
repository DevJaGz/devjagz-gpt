import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatAdapter } from '@app/features/chats/adapters/chat.adapter';
import { ChatListFacadeService } from '@app/features/chats/services/facade-chat-list.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatListComponent {
  menuItems$ = this.chatListService
    .viewChats()
    .pipe(
      map((chats) => chats.map((chat) => this.chatAdapter.toMenuItem(chat)))
    );

  constructor(
    private chatListService: ChatListFacadeService,
    private chatAdapter: ChatAdapter
  ) {}
}
