import { Component } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent {
  imageUrl: string | undefined;

  ngOnInit() {
    // Link do Google Drive
    const driveLink = 'https://drive.google.com/file/d/1KAo6PU2jNNkrZNtRjHU0pEKiA3BmSJq7/view?usp=sharing';

    // Tenta extrair o ID do arquivo do link do drive
    const match = driveLink.match(/\/d\/([^\/]+)\//);

    // Verifica se o padrão foi encontrado
    if (match && match[1]) {
      // Constrói a URL da imagem usando o ID do arquivo
      this.imageUrl = 'https://drive.google.com/uc?id=' + match[1];
    } else {
      console.error('Erro ao extrair ID do arquivo do link do Google Drive.');
    }}
}
