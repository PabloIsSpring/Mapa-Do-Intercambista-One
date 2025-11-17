import { Comentario } from "./comentarios";

export interface Post {
    id: number;
    titulo: string;
    conteudo: string;
    autor: string;
    likes: number;
    dislikes: number;
    likedBy: string[];
    dislikedBy: string[];
    comentarios: Comentario[];
    editando?: boolean;
    idAgencia?: number;
}