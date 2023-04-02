import { OpenAIResponse } from '@app/core/interfaces/open-ai.interface';
import { Messages } from '@app/features/chats/interfaces/messages.interface';
import { Observable } from 'rxjs';

export abstract class ChatRepository {
  abstract viewMessages(): Messages;
  abstract sendMessage(conent: string): Observable<OpenAIResponse>;
}
