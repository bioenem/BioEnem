// quiz.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { Questao } from '../models';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questoes: Questao[] = [];
  questaoAtual: Questao | null = null;
  indiceAtual: number = 0;
  acertos: number = 0;
  erros: number = 0;
  respostaSelecionada: string | null = null; // Altere de questaoRespondidaa para respostaSelecionada
  questaoRespondidaa: boolean = false;
  mostrarBotaoConfirmar: boolean = false;
  mostrarBotaoProximaQuestao: boolean = false;
  mostrarAlternativas: boolean = true;
  respostaCerta: string | null = null;
  mostrarBotaoGabarito: boolean = false;
  mostrarRespostaCerta: boolean = false;

  constructor(private quizService: QuizService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const topico = params['topico'];
      this.carregarQuestoes(topico);
    });
  }

  isAlternativaSelecionada(alternativa: string): boolean {
    return this.respostaSelecionada === alternativa;
  }

  // Método para tratar a seleção da alternativa
  selecionarAlternativa(alternativa: string): void {
    this.respostaSelecionada = alternativa;
    this.mostrarBotaoConfirmar = true; // Mostrar o botão "Confirmar Resposta"
  }

  obterRespostaCerta(): string {
    if (this.questaoAtual) {
      return this.questaoAtual.RespostaCerta;
    }
    return '';
  }


  mapearNome(topico: string): string {
    const mapeamentoNomes: { [key: string]: string } = {
      'fisiologia humana': 'Fisiologia',
    };

    const tópicoLowerCase = topico.toLowerCase();

    if (tópicoLowerCase === 'fisiologia humana') {
      return mapeamentoNomes[tópicoLowerCase] || tópicoLowerCase;
    }

    return this.removerAcentos(tópicoLowerCase);
  }

  removerAcentos(texto: string): string {
    const mapaAcentos: {[key: string]: string} = {
      'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
      'â': 'a', 'ê': 'e', 'î': 'i', 'ô': 'o', 'û': 'u',
      'ã': 'a', 'õ': 'o', 'ç': 'c',
    };

    return texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/gi, c => mapaAcentos[c] || c);
  }



  carregarQuestoes(topico: string) {
    console.log('Carregando todas as questões...');

    if (this.route.snapshot.queryParams['topico']) {
      const topicoNoBanco = this.mapearNome(topico);

      this.quizService.getQuestoesPorConteudo(topicoNoBanco).subscribe(
        (questoes: Questao[]) => {
          this.questoes = questoes;
          if (this.questoes.length > 0) {
            this.questaoAtual = this.questoes[0];
            console.log('Questões carregadas:', this.questoes);
          } else {
            console.error('Nenhuma questão encontrada.');
          }
        },
        (erro: any) => {
          console.error('Erro ao carregar questões', erro);
        }
      );
    } else {
      console.error('Não foi possível carregar as questões: Tópico não especificado.');
    }
  }







  responderQuestao(alternativaEscolhida: string) {
    if (!this.questaoAtual) {
      console.error('Nenhuma questão carregada.');
      return;
    }

    // Lógica para verificar se a resposta está correta
    const respostaCorreta = this.questaoAtual.RespostaCerta;

    if (alternativaEscolhida === respostaCorreta) {
      this.acertos++;
    } else {
      this.erros++;
    }

    this.respostaSelecionada = alternativaEscolhida; // Altere aqui
    this.questaoRespondidaa = true;
  }

  confirmarResposta(): void {
    if (this.respostaSelecionada) {
      // Lógica para confirmar resposta
      console.log('Resposta confirmada:', this.respostaSelecionada);
      console.log('Resposta certa:', this.obterRespostaCerta());
      // Reinicie a variável após a confirmação
      this.respostaCerta = this.obterRespostaCerta();
      this.respostaSelecionada = null;
      this.mostrarBotaoConfirmar = false;
      this.mostrarBotaoProximaQuestao = true;
      this.mostrarBotaoGabarito = true;
      this.mostrarAlternativas = false;
    } else {
      console.error('Nenhuma resposta selecionada.');
    }
  }

  mostrarGabarito(): void {
    console.log('Gabarito:', this.obterRespostaCerta());
    this.respostaCerta = this.obterRespostaCerta();
    this.mostrarBotaoGabarito = false;
    this.mostrarRespostaCerta = true;
  }

  proximaQuestao() {
    this.mostrarAlternativas = true;
    this.mostrarBotaoProximaQuestao = false;
    this.questaoRespondidaa = false;
    this.indiceAtual++;
    this.atualizarQuestaoAtual();

    const quizSection = document.getElementById('quizSectionId');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  atualizarQuestaoAtual() {
    if (this.indiceAtual < this.questoes.length) {
      this.questaoAtual = this.questoes[this.indiceAtual];
    } else {
      console.log('Você atingiu o final das questões.');
    }
  }

  // Adicione este método à sua classe QuizComponent
questaoRespondida(): boolean {
  return this.acertos > 0 || this.erros > 0;
}

}
