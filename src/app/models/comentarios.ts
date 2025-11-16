export interface Comentario {
  id: number;
  autor: string;
  texto: string;

  likes: number;
  dislikes: number;

  // listas de quem curtiu/descurtiu (uso de nomeUsuario)
  likedBy: string[];
  dislikedBy: string[];

  respostas: Comentario[];

  // UI helpers
  editando?: boolean;
  responder?: boolean;
  novaResposta?: string;
}