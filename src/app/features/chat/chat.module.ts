import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';
import { ChatSidebarItemComponent } from './components/chat-sidebar/components/chat-sidebar-item/chat-sidebar-item.component';
import { ChatComponent } from './pages/chat/chat.component';

@NgModule({
  declarations: [
    ChatComponent,
    ChatInputComponent,
    ChatSidebarComponent,
    ChatSidebarItemComponent,
  ],
  imports: [CommonModule, ChatRoutingModule, FormsModule, SharedModule],
})
export class ChatModule {}
