import { Injectable } from '@angular/core';
import { OpenAIResponse } from '@app/core/interfaces/open-ai.interface';
import { OpenAIService } from '@app/core/services/open-ai.service';
import { Messages } from '@app/features/chats/interfaces/messages.interface';
import { ChatRepository } from '@app/features/chats/repositories/chat.repository';
import { Observable } from 'rxjs';

@Injectable()
export class ChatService implements ChatRepository {
  constructor(private openAI: OpenAIService) {}
  viewMessages(): Messages {
    return [];
  }
  sendMessage(content: string): Observable<OpenAIResponse> {
    console.log('ChatService sendMessage', content);
    return this.openAI.createCompletion(content);
  }
}
