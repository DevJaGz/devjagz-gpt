import { Injectable } from '@angular/core';
import { IMessage } from '@app/features/chats/interfaces/message.interface';
import { ChatRepository } from '@app/features/chats/repositories/chat.repository';

@Injectable()
export class ChatFacadeService {
  constructor(private repository: ChatRepository) {}

  viewMessages(): IMessage[] {
    return this.repository.viewMessages();
  }

  sendMessage(content: string): void {
    console.log('ChatFacadeService sendMessage', content);
    this.repository.sendMessage(content).subscribe({
      next: (value) => {
        console.log('Value received:', value.choices[0].message.content);
      },
    });
  }
}
