import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ISidebarItem } from '@app/features/chat/interfaces/chat-sidebar-item.interface';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatSidebarComponent {
  items: ISidebarItem[] = [
    {
      id: '1',
      label: 'Hola',
      svgPath: 'assets/images/svg/icons/comment.svg',
    },
    {
      id: '2',
      label: 'Hola como va todo',
      svgPath: 'assets/images/svg/icons/comment.svg',
    },
  ];

  trackByFn(index: number, item: ISidebarItem): string {
    return item.id;
  }
}
