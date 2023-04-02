import { Observable } from 'rxjs';
import { IChat } from './chat.interface';

export type Chats = Observable<IChat[]>;
