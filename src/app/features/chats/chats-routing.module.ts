import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatListComponent } from '@app/features/chats/pages/chats-list/chat-list.component';

const routes: Routes = [
  {
    path: '',
    component: ChatListComponent,
  },
  {
    path: ':id',
    component: ChatListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsRoutingModule {}
