export interface Comentario {
  id: number;
  autor: string;
  texto: string;
  likes: number;
  dislikes: number;
  likedBy: string[];
  dislikedBy: string[];
  respostas: Comentario[];
  editando?: boolean;
  responder?: boolean;
  novaResposta?: string;
}