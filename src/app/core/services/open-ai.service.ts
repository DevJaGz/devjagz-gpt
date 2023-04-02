import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    });
    return headers;
  }

  constructor(private http: HttpClient) {}

  createCompletion(): Observable<any> {
    const body: any = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content:
            'Hola dile de buena manera a mi hermano que se vaya a descansar',
        },
      ],
    };
    return this.http.post<any>(environment.openAI_URL, body, {
      headers: this.headers,
    });
  }
}
