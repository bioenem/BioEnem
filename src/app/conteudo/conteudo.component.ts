import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {
  topico: string = '';
  imagens: string[] = [];
  links: { descricao: string, url: string }[] = [];

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
      this.route.queryParams.subscribe(params => {
          this.topico = params['topico'];
          this.atualizarImagens();
      });
  }

  atualizarImagens() {
    // Lógica para associar o tópico às imagens correspondentes
    switch (this.topico.toLowerCase()) {
      case 'ecologia':
        this.imagens = ['ecologia1.png', 'ecologia2.png', 'ecologia3.png', 'ecologia4.png'];
        this.links = [
          { descricao: 'Acessar mapa mental 1', url: 'https://drive.google.com/file/d/14t2f7OkN5gvGGxV1MLtWs_vqtJiagvxd/view?usp=sharing' },
          { descricao: 'Acessar mapa mental 2', url: 'https://drive.google.com/file/d/110k-qPxYRjdbKJ3zx8eFjcQY8JkJLbZM/view?usp=sharing' },
          { descricao: 'Acessar mapa mental 3', url: 'https://drive.google.com/file/d/1DAnvqeS72jvcFV5VLovycYDQigC3N-IV/view?usp=sharing' },
          { descricao: 'Acessar mapa mental 4', url: 'https://drive.google.com/file/d/1KAo6PU2jNNkrZNtRjHU0pEKiA3BmSJq7/view?usp=sharing' }
        ];
        break;
      case 'genetica':
        this.imagens = ['genetica1.png', 'genetica2.png', 'genetica3.png', 'genetica4.png'];
        this.links = [
          { descricao: 'Acessar mapa mental 1', url: 'https://drive.google.com/file/d/14t2f7OkN5gvGGxV1MLtWs_vqtJiagvxd/view?usp=sharing' },
          { descricao: 'Acessar mapa mental 2', url: 'https://drive.google.com/file/d/110k-qPxYRjdbKJ3zx8eFjcQY8JkJLbZM/view?usp=sharing' },
          { descricao: 'Acessar mapa mental 3', url: 'https://drive.google.com/file/d/1DAnvqeS72jvcFV5VLovycYDQigC3N-IV/view?usp=sharing' },
          { descricao: 'Acessar mapa mental 4', url: 'https://drive.google.com/file/d/1KAo6PU2jNNkrZNtRjHU0pEKiA3BmSJq7/view?usp=sharing' }
        ];
        break;
      case 'fisiologia humana':
        this.imagens = ['fisiologia1.png', 'fisiologia2.png', 'fisiologia3.png', 'fisiologia4.png'];
        this.links = [
          { descricao: 'Acessar mapa mental 1', url: 'https://drive.google.com/file/d/1kS_VIB96fJpf7ZxJVyuijdjgGLfrxh5K/view?usp=drive_link' },
          { descricao: 'Acessar mapa mental 2', url: 'https://drive.google.com/file/d/1aqFB0tP-eMohJtRSibJB9DBy4GvHsj-9/view?usp=drive_link' },
          { descricao: 'Acessar mapa mental 3', url: 'https://drive.google.com/file/d/1CdrA3TJYiaUNn0EddFw43ASiOSCsZc4I/view?usp=drive_link' },
          { descricao: 'Acessar mapa mental 4', url: 'https://drive.google.com/file/d/1fN-omxezEiQ7KfEZPBaEa_3IWyGWBni7/view?usp=drive_link' }
        ];
        break;
      case 'evolucao':
        this.imagens = ['evolucao1.png', 'evolucao2.png', 'evolucao3.png', 'evolucao4.png'];
        this.links = [
          { descricao: 'Acessar mapa mental 1', url: 'https://drive.google.com/file/d/1Nh_v3_UauuRlwDW5aIZk4nBjXqpJNO8c/view?usp=drivesdk' },
          { descricao: 'Acessar mapa mental 2', url: 'https://drive.google.com/file/d/1Y7aPhfYdLVYhHWSJVdm63G2o5p0ZKB_y/view?usp=drivesdk' },
          { descricao: 'Acessar mapa mental 3', url: 'https://drive.google.com/file/d/1y3OelhxbRBTDw2VHDM9Y3vX2VmrFUTXP/view?usp=drivesdk' },
          { descricao: 'Acessar mapa mental 4', url: 'https://drive.google.com/file/d/1tlRnVX8CzEm5H8YyCwsXzXeq4mC9OfiC/view?usp=drivesdk' }
        ];
        break;
      case 'citologia':
        this.imagens = ['citologia1.png', 'citologia2.png', 'citologia3.png', 'citologia4.png'];
        this.links = [
          { descricao: 'Acessar mapa mental 1', url: 'https://drive.google.com/file/d/1LAtjPssUgECsglJWcbj-3tPm8YNBR-o_/view?usp=drivesdk' },
          { descricao: 'Acessar mapa mental 2', url: 'https://drive.google.com/file/d/1zpA6QYL1T3oNy-FI7WVu2CbJdVsvkezP/view?usp=drivesdk' },
          { descricao: 'Acessar mapa mental 3', url: 'https://drive.google.com/file/d/1N175FElcRWWLyG7HhxrPFjRyeHFF67_Q/view?usp=drivesdk' },
          { descricao: 'Acessar mapa mental 4', url: 'https://drive.google.com/file/d/1pS4Hc5AN5ofgWZ-vW5xnizhS0c1blnXn/view?usp=drivesdk' }
        ];
        break;
      // Adicione mais casos conforme necessário para outros tópicos
      default:
        this.imagens = ['imagem-padrao.png', 'imagem-padrao.png', 'imagem-padrao.png', 'imagem-padrao.png'];
    }
  }
}
