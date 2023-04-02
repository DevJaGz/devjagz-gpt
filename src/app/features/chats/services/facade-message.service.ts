import { Injectable } from '@angular/core';
import { MessageRepository } from '../repositories/message.repository';

@Injectable()
export class MessageFacadeService {
  constructor(private repository: MessageRepository) {}
}
