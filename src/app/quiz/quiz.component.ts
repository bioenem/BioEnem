// quiz.component.ts
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Questao } from '../models';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questoes: Questao[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.carregarQuestoes('citologia'); // Substitua com o conteúdo desejado
  }

  carregarQuestoes(conteudo: string) {
    this.quizService.getQuestoes(conteudo).subscribe(
      (questoes: Questao[]) => {
        this.questoes = questoes;
      },
      (erro: any) => { // Especifica o tipo de 'erro'
        console.error('Erro ao carregar questões', erro);
      }
    );
  }
}
