import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpenAIResponse } from '@app/core/interfaces/open-ai.interface';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenAIService {
  get headers(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.openAI_KEY}`,
      'Retry-After': '5',
    });
    return headers;
  }

  constructor(private http: HttpClient) {}

  createCompletion(content: string): Observable<OpenAIResponse> {
    console.log('createCompletion', content);

    const body: any = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are DevJaGz GPT and you are a helpful assistant.',
        },
        {
          role: 'user',
          content,
        },
      ],
    };
    return this.http.post<OpenAIResponse>(environment.openAI_URL, body, {
      headers: this.headers,
    });
  }
}
