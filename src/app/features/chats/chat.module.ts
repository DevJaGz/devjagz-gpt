import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { ChatsRoutingModule } from './chats-routing.module';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatLandingComponent } from './components/chat-landing/chat-landing.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';
import { ChatSidebarItemComponent } from './components/chat-sidebar/components/chat-sidebar-item/chat-sidebar-item.component';
import { ChatListComponent } from './pages/chats-list/chat-list.component';
import { ChatRepository } from './repositories/chat.repository';
import { ChatsListRepository } from './repositories/chats-list.repository';
import { MessageRepository } from './repositories/message.repository';
import { ChatListService } from './services/chat-list.service';
import { ChatService } from './services/chat.service';
import { ChatListFacadeService } from './services/facade-chat-list.service';
import { ChatFacadeService } from './services/facade-chat.service';
import { MessageFacadeService } from './services/facade-message.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    ChatListComponent,
    ChatInputComponent,
    ChatSidebarComponent,
    ChatSidebarItemComponent,
    ChatLandingComponent,
  ],
  imports: [CommonModule, ChatsRoutingModule, FormsModule, SharedModule],
  providers: [
    ChatListFacadeService,
    ChatListService,
    ChatFacadeService,
    ChatService,
    MessageFacadeService,
    MessageService,
    {
      provide: ChatsListRepository,
      useExisting: ChatListService,
    },
    {
      provide: ChatRepository,
      useExisting: ChatListService,
    },
    {
      provide: MessageRepository,
      useExisting: MessageService,
    },
  ],
})
export class ChatsModule {}
