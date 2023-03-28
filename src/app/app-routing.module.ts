import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum AppRouteNames {
  BLANK = '',
  CHAT = 'chat',
}

const routes: Routes = [
  {
    path: AppRouteNames.BLANK,
    pathMatch: 'full',
    redirectTo: 'chat',
  },
  {
    path: AppRouteNames.CHAT,
    loadChildren: () =>
      import('@app/features/chats/chats.module').then((m) => m.ChatsModule),
  },
  {
    path: '**',
    redirectTo: 'chat',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
