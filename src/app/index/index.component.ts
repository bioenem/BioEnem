import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  constructor(private router: Router) {}

  navegarParaConteudo(topico: string) {
    // Navegue para o componente de conteúdo e passe o nome do tópico como parâmetro
    this.router.navigate(['/conteudo'], { queryParams: { topico: topico } });
}
}
