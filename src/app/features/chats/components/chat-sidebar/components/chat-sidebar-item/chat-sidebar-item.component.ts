import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { AppRouteNames } from '@app/app-routing.module';
import { SidebarItemMode } from '@app/features/chats/constants/chat-sidebar-item.constant';
import { ISidebarItem } from '@app/features/chats/interfaces/chat-sidebar-item.interface';
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
  item!: ISidebarItem;

  readonly modes: typeof SidebarItemMode = SidebarItemMode;
  svgIcon!: Observable<string>;
  routerLink!: string;

  get label(): string {
    const { item } = this;
    if (item) {
      return item.label;
    }
    return '';
  }

  get isActive(): boolean {
    const { item, routerLink } = this;
    if (item && routerLink) {
      return this.router.isActive(routerLink, {
        paths: 'exact',
        queryParams: 'exact',
        fragment: 'ignored',
        matrixParams: 'ignored',
      });
    }
    return false;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    const { item } = this;
    if (item) {
      const svg = fetch(this.item.svgPath).then((response) => response.text());
      const routerLink = `/${AppRouteNames.CHAT}/${item.id}`;
      this.svgIcon = from(svg);
      this.routerLink = routerLink;
    }
  }
}
