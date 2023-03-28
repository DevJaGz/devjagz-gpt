import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '@app/features/chats/pages/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
  },
  {
    path: ':id',
    component: ChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsRoutingModule {}