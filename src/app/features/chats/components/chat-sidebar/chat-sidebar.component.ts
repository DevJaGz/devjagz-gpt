import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ISidebarItem } from '@app/features/chats/interfaces/chat-sidebar-item.interface';

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
      label:
        'Hola quiero que escribas un ensayo de 100 palabras teniendo en cuenta',
      svgPath: 'assets/images/svg/icons/comment.svg',
    },
    {
      id: '2',
      label:
        'Estoy creando una historia sobre el hombre araña y la mujer maravilla',
      svgPath: 'assets/images/svg/icons/comment.svg',
    },
  ];

  trackByFn(index: number, item: ISidebarItem): string {
    return item.id;
  }
}
