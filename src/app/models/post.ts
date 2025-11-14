interface Post {
    id: number;
    titulo: string;
    conteudo: string;
    autor: string;
    likes: number;
    comentarios: Comentario[];
    editando?: boolean;
}