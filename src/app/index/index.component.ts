import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Isso rolará a página para o topo
      }
    });
  }

  navegarParaConteudo(topico: string) {
    // Navegue para a rota /conteudo com o parâmetro topico
    this.router.navigate(['/conteudo'], { queryParams: { topico: topico } });
  }
}
