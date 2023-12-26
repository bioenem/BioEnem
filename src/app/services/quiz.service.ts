// quiz.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Questao } from '../models';

interface QuestoesResponse {
  data: Questao[];
}

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getQuestoesPorConteudo(conteudo: string): Observable<Questao[]> {
    const url = `${this.apiUrl}/${conteudo}`;
    console.log('Chamando URL:', url);

    return this.http.get<QuestoesResponse>(url).pipe(
      map(response => response.data)
    );
  }
}
