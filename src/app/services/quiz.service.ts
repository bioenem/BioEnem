// quiz.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Questao } from '../models';

interface QuestaoResponse {
  data: Questao[];
}

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private apiUrl = 'http://localhost:3000'; // Atualize com a URL do seu servidor

  constructor(private http: HttpClient) {}

  getQuestoes(conteudo: string): Observable<Questao[]> {
    return this.http.get<QuestaoResponse>(`${this.apiUrl}/${conteudo}`).pipe(
      map(response => response.data)
    );
  }
}
