import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chats } from '../interfaces/chats.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatsApiService {
  constructor(private http: HttpClient) {}

  getChats(): Chats {
    return this.http.get('') as Chats;
  }
}
