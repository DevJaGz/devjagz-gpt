import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SidebarItemMode } from '@app/features/chat/constants/chat-sidebar-item.constant';
import { ISidebarItem } from '@app/features/chat/interfaces/chat-sidebar-item.interface';

@Component({
  selector: 'app-chat-sidebar-item',
  templateUrl: './chat-sidebar-item.component.html',
  styleUrls: ['./chat-sidebar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatSidebarItemComponent {
  @Input()
  currentMode: SidebarItemMode = SidebarItemMode.DEFAULT;

  @Input()
  item: ISidebarItem = {
    label: 'Hola',
    outlined: false,
    routerLink: '',
    image: 'plus',
  };

  readonly modes: typeof SidebarItemMode = SidebarItemMode;
}
