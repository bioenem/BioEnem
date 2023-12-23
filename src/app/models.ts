// models.ts
export interface Alternativa {
  letra: string;
  texto: string;
}

export interface Questao {
  id: number;
  enunciado: string;
  itemA: Alternativa;
  itemB: Alternativa;
  itemC: Alternativa;
  itemD: Alternativa;
  itemE: Alternativa;
}
