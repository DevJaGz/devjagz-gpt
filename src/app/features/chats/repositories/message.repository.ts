import { Injectable } from '@angular/core';

@Injectable()
export abstract class MessageRepository {
  abstract editMessage(): void;
}
