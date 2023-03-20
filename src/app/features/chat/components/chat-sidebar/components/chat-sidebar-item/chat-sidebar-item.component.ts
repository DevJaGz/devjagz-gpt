import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChatSidebarItemMode } from '@app/features/chat/constants/chat-sidebar-item.constant';

@Component({
  selector: 'app-chat-sidebar-item',
  templateUrl: './chat-sidebar-item.component.html',
  styleUrls: ['./chat-sidebar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatSidebarItemComponent {
  @Input()
  currentMode: ChatSidebarItemMode = ChatSidebarItemMode.DEFAULT;
  readonly modes: typeof ChatSidebarItemMode = ChatSidebarItemMode;
}
