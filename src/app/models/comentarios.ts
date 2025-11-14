interface Comentario {
    id: number;
    autor: string;
    texto: string;
    likes: number;
    respostas: Comentario[];
    editando?: boolean;
    responder?: boolean;
    novaResposta?: string;
  }