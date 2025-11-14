import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-foruns',
  standalone: false,
  templateUrl: './foruns.html',
  styleUrl: './foruns.css'
})
export class Foruns implements OnInit {

  usuarioLogado = false;
  nomeUsuario = 'Usuário';

  // Ordenação
  ordenarPor = 'recentes';

  // Dados do novo post
  novoTitulo = '';
  novoConteudo = '';

  // Inputs de comentários e respostas
  inputsComentario: any = {};

  // POSTS (fixos + novos)
  posts: Post[] = [
    {
      id: 1,
      titulo: 'Intercâmbio na Alemanha',
      conteudo: 'Compartilhe suas experiências sobre estudar e viver na Alemanha.',
      autor: 'Admin',
      likes: 0,
      comentarios: []
    },
    {
      id: 2,
      titulo: 'Dúvidas sobre o Japão',
      conteudo: 'Curiosidades sobre o cotidiano no Japão.',
      autor: 'Admin',
      likes: 0,
      comentarios: []
    }
  ];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.cliente$.subscribe(user => {
      this.usuarioLogado = !!user;
      if (user) {
        this.nomeUsuario = user.user_metadata?.['primeiroNome'] || 'Usuário';
      } else {
        this.nomeUsuario = 'Usuário';
      }
    });
  }

  // Criar post
  criarPost() {
    if (!this.novoTitulo.trim() || !this.novoConteudo.trim()) return;

    const novoPost: Post = {
      id: Date.now(),
      titulo: this.novoTitulo,
      conteudo: this.novoConteudo,
      autor: this.nomeUsuario,
      likes: 0,
      comentarios: []
    };

    this.posts.unshift(novoPost);
    this.novoTitulo = '';
    this.novoConteudo = '';
  }

  // CURTIR POST
  curtirPost(post: Post) {
    post.likes++;
  }

  // EDITAR POST
  salvarEdicaoPost(post: Post, novoTitulo: string, novoConteudo: string) {
    post.titulo = novoTitulo;
    post.conteudo = novoConteudo;
    post.editando = false;
  }

  excluirPost(postId: number) {
    this.posts = this.posts.filter(p => p.id !== postId);
  }

  // COMENTAR
  comentar(post: Post) {
    const texto = this.inputsComentario[post.id];
    if (!texto || !texto.trim()) return;

    const novoComentario: Comentario = {
      id: Date.now(),
      autor: this.nomeUsuario,
      texto,
      likes: 0,
      respostas: [],
      responder: false,
      novaResposta: '',
      editando: false
    };

    post.comentarios.push(novoComentario);
    this.inputsComentario[post.id] = '';
  }

  // LIKE EM COMENTÁRIO
  curtirComentario(comentario: Comentario) {
    comentario.likes++;
  }

  // RESPONDER COMENTÁRIO (adiciona resposta como comentário aninhado)
  responderComentario(comentario: Comentario) {
    const texto = comentario.novaResposta;
    if (!texto || !texto.trim()) return;

    const nova: Comentario = {
      id: Date.now(),
      autor: this.nomeUsuario,
      texto,
      likes: 0,
      respostas: [],
      responder: false,
      novaResposta: '',
      editando: false
    };

    comentario.respostas.push(nova);
    comentario.novaResposta = '';
    comentario.responder = false;
  }

  // EDITAR COMENTÁRIO
  salvarEdicaoComentario(c: Comentario, novo: string) {
    c.texto = novo;
    c.editando = false;
  }

  excluirComentario(post: Post, comentario: Comentario) {
    post.comentarios = post.comentarios.filter(c => c.id !== comentario.id);
  }

  // ORDENAR POSTS
  get postsOrdenados() {
    if (this.ordenarPor === 'likes') {
      return [...this.posts].sort((a, b) => b.likes - a.likes);
    }
    return [...this.posts].sort((a, b) => b.id - a.id);
  }

  // ORDENAR COMENTÁRIOS (retorna novo array)
  ordenarComentarios(comentarios: Comentario[]) {
    if (this.ordenarPor === 'likes') {
      return [...comentarios].sort((a, b) => b.likes - a.likes);
    }
    return comentarios;
  }

}