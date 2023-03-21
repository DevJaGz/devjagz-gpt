import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SidebarItemMode } from '@app/features/chat/constants/chat-sidebar-item.constant';
import { ISidebarItem } from '@app/features/chat/interfaces/chat-sidebar-item.interface';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-chat-sidebar-item',
  templateUrl: './chat-sidebar-item.component.html',
  styleUrls: ['./chat-sidebar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatSidebarItemComponent implements OnInit {
  @Input()
  currentMode: SidebarItemMode = SidebarItemMode.DEFAULT;

  @Input()
  item: ISidebarItem = {
    label: 'Hola',
    outlined: false,
    routerLink: '',
    svgPath: 'assets/images/svg/icons/comment.svg',
  };

  readonly modes: typeof SidebarItemMode = SidebarItemMode;

  svgIcon!: Observable<string>;

  ngOnInit(): void {
    const { item } = this;
    if (item) {
      const svg = fetch(this.item.svgPath).then((response) => response.text());
      this.svgIcon = from(svg);
    }
  }
}
