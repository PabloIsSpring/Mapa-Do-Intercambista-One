import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Comentario } from '../models/comentarios';
import { Post } from '../models/post';

@Component({
  selector: 'app-foruns',
  standalone: false,
  templateUrl: './foruns.html',
  styleUrl: './foruns.css'
})
export class Foruns implements OnInit {

  usuarioLogado = false;
  nomeUsuario = 'Usuário';
  ordenarPor: 'recentes' | 'likes' = 'recentes';

  novoTitulo = '';
  novoConteudo = '';

  inputsComentario: Record<number, string> = {};

  posts: Post[] = [];

  constructor(private authService: AuthService) { }

  // -------------------------- INIT --------------------------
  ngOnInit(): void {
    this.authService.cliente$.subscribe(user => {
      this.usuarioLogado = !!user;
      this.nomeUsuario = user?.user_metadata?.['primeiroNome'] || 'Usuário';
    });

    this.carregarLocalStorage();
  }

  // -------------------------- LOCAL STORAGE --------------------------
  salvarLocalStorage() {
    localStorage.setItem('forum_posts', JSON.stringify(this.posts));
  }

  carregarLocalStorage() {
    const salvo = localStorage.getItem('forum_posts');
    this.posts = salvo ? JSON.parse(salvo) : [];
  }

  // -------------------------- POSTS --------------------------
  criarPost() {
    if (!this.novoTitulo.trim() || !this.novoConteudo.trim()) return;

    const novo: Post = {
      id: Date.now(),
      titulo: this.novoTitulo.trim(),
      conteudo: this.novoConteudo.trim(),
      autor: this.nomeUsuario,
      likes: 0,
      dislikes: 0,
      likedBy: [],
      dislikedBy: [],
      comentarios: [],
      editando: false
    };

    this.posts.unshift(novo);
    this.novoTitulo = '';
    this.novoConteudo = '';

    this.salvarLocalStorage();
  }

  salvarEdicaoPost(post: Post, novoTitulo?: string, novoConteudo?: string) {
    if (novoTitulo) post.titulo = novoTitulo;
    if (novoConteudo) post.conteudo = novoConteudo;
    post.editando = false;

    this.salvarLocalStorage();
  }

  excluirPost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
    this.salvarLocalStorage();
  }

  // -------------------------- LIKE / DISLIKE POST --------------------------
  likePost(p: Post) {
    if (!this.usuarioLogado) return;

    const user = this.nomeUsuario;

    if (p.likedBy.includes(user)) {
      p.likedBy = p.likedBy.filter(u => u !== user);
      p.likes--;
    } else {
      p.likedBy.push(user);
      p.likes++;

      if (p.dislikedBy.includes(user)) {
        p.dislikedBy = p.dislikedBy.filter(u => u !== user);
        p.dislikes--;
      }
    }

    this.salvarLocalStorage();
  }

  dislikePost(p: Post) {
    if (!this.usuarioLogado) return;

    const user = this.nomeUsuario;

    if (p.dislikedBy.includes(user)) {
      p.dislikedBy = p.dislikedBy.filter(u => u !== user);
      p.dislikes--;
    } else {
      p.dislikedBy.push(user);
      p.dislikes++;

      if (p.likedBy.includes(user)) {
        p.likedBy = p.likedBy.filter(u => u !== user);
        p.likes--;
      }
    }

    this.salvarLocalStorage();
  }

  // -------------------------- COMENTÁRIOS --------------------------
  comentar(post: Post) {
    const texto = (this.inputsComentario[post.id] || '').trim();
    if (!texto) return;

    const novo: Comentario = {
      id: Date.now(),
      autor: this.nomeUsuario,
      texto,
      likes: 0,
      dislikes: 0,
      likedBy: [],
      dislikedBy: [],
      respostas: [],
      novaResposta: '',
      responder: false,
      editando: false
    };

    post.comentarios.push(novo);
    this.inputsComentario[post.id] = '';

    this.salvarLocalStorage();
  }

  salvarEdicaoComentario(c: Comentario, novo: string) {
    c.texto = novo;
    c.editando = false;

    this.salvarLocalStorage();
  }

  excluirComentario(post: Post, c: Comentario) {
    post.comentarios = post.comentarios.filter(x => x.id !== c.id);

    this.salvarLocalStorage();
  }

  // -------------------------- LIKE / DISLIKE COMENTÁRIO --------------------------
  likeComentario(c: Comentario) {
    if (!this.usuarioLogado) return;

    const user = this.nomeUsuario;

    if (c.likedBy.includes(user)) {
      c.likedBy = c.likedBy.filter(u => u !== user);
      c.likes--;
    } else {
      c.likedBy.push(user);
      c.likes++;

      if (c.dislikedBy.includes(user)) {
        c.dislikedBy = c.dislikedBy.filter(u => u !== user);
        c.dislikes--;
      }
    }

    this.salvarLocalStorage();
  }

  dislikeComentario(c: Comentario) {
    if (!this.usuarioLogado) return;

    const user = this.nomeUsuario;

    if (c.dislikedBy.includes(user)) {
      c.dislikedBy = c.dislikedBy.filter(u => u !== user);
      c.dislikes--;
    } else {
      c.dislikedBy.push(user);
      c.dislikes++;

      if (c.likedBy.includes(user)) {
        c.likedBy = c.likedBy.filter(u => u !== user);
        c.likes--;
      }
    }

    this.salvarLocalStorage();
  }

  // -------------------------- RESPONDER COMENTÁRIO --------------------------
  responderComentario(c: Comentario) {
    if (!this.usuarioLogado) return;

    const texto = (c.novaResposta || '').trim();
    if (!texto) return;

    const nova: Comentario = {
      id: Date.now(),
      autor: this.nomeUsuario,
      texto,
      likes: 0,
      dislikes: 0,
      likedBy: [],
      dislikedBy: [],
      respostas: [],
      responder: false,
      novaResposta: '',
      editando: false
    };

    c.respostas.push(nova);
    c.responder = false;
    c.novaResposta = '';

    this.salvarLocalStorage();
  }

  // -------------------------- ORDENAÇÃO --------------------------
  get postsOrdenados(): Post[] {
    if (this.ordenarPor === 'likes') {
      return [...this.posts].sort((a, b) =>
        (b.likes - b.dislikes) - (a.likes - a.dislikes)
      );
    }

    return [...this.posts].sort((a, b) => b.id - a.id);
  }

  ordenarComentarios(lista: Comentario[]): Comentario[] {
    if (!lista) return [];

    if (this.ordenarPor === 'likes') {
      return [...lista].sort((a, b) =>
        (b.likes - b.dislikes) - (a.likes - a.dislikes)
      );
    }

    return lista;
  }
}
