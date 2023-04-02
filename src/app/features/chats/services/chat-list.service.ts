import { Injectable } from '@angular/core';
import { ChatsListRepository } from '@app/features/chats/repositories/chats-list.repository';
import { of } from 'rxjs';
import { OpenAIService } from '../../../core/services/open-ai.service';
import { Chats } from '../interfaces/chats.interface';
import { ChatsApiService } from './api-chats.service';

@Injectable()
export class ChatListService implements ChatsListRepository {
  constructor(
    private api: ChatsApiService,
    private openAIService: OpenAIService
  ) {}

  viewChats(): Chats {
    // this.openAIService.createCompletion().pipe(tap(console.log)).subscribe();
    return of([]);
  }

  createChat(): void {}
  deleteChat(): void {}
  deleteChats(): void {}
  editChatName(): void {}
}
