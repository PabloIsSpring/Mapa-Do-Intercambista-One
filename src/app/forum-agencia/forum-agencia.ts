import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Post } from '../models/post';
import { Comentario } from '../models/comentarios';

@Component({
  selector: 'app-forum-agencia',
  standalone: false,
  templateUrl: './forum-agencia.html',
  styleUrl: './forum-agencia.css'
})
export class ForumAgencia implements OnInit {

  agenciaId: number = 0;

  usuarioLogado = false;
  nomeUsuario = 'Usuário';
  ordenarPor: 'recentes' | 'likes' = 'recentes';

  novoTitulo = '';
  novoConteudo = '';

  inputsComentario: Record<number, string> = {};

  posts: Post[] = [];

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.agenciaId = Number(this.route.snapshot.params['id'] ?? 0);

    this.authService.cliente$.subscribe(user => {
      this.usuarioLogado = !!user;
      this.nomeUsuario = user?.user_metadata?.['primeiroNome'] || 'Usuário';
    });

    this.carregarLocalStorage();
  }

  /* ------------------------------ LOCAL STORAGE ------------------------------ */

  carregarLocalStorage() {
    const salvo = localStorage.getItem(`forum_agencia_${this.agenciaId}`);
    if (salvo) {
      this.posts = JSON.parse(salvo);
    } else {
      // Se não houver no localStorage, usa a lista padrão
      this.posts = this.forumsAgencias.filter(p => p.idAgencia === this.agenciaId);
      // Opcional: salva no localStorage para persistir
      this.salvarLocalStorage();
    }
  }


  forumsAgencias: Post[] = [
    {
      id: 1,
      idAgencia: 1,
      titulo: "Velocidade do Intercâmbio",
      conteudo: "Eu achei a maneira com qual essa agência trabalha muito ágil, conseguiu me ajudar muito no que eu precisava resolver com relação à documentação e deu boas dicas para o embarque. Além disso, na volta, fizeram um breve acompanhamento para entender como foi a viagem e a experiência no país.",
      autor: "Hiago Costa Brisola",
      likes: 10,
      dislikes: 1,
      likedBy: [],
      dislikedBy: [],
      comentarios: [
        {
          id: 1,
          autor: "Mariana",
          texto: "Concordo! Atendimento rápido e eficiente.",
          likes: 5,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          respostas: [],
        },
        {
          id: 2,
          autor: "Thiago",
          texto: "Também achei excelente, super recomendo.",
          likes: 3,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          respostas: [],
        },
      ],
    },
    {
      id: 2,
      idAgencia: 1,
      titulo: "Suporte 24h Realmente Funciona",
      conteudo: "Durante minha estadia na Irlanda, precisei de ajuda com o alojamento e fui atendida na hora pela equipe. O suporte foi rápido e eficaz. Uma melhoria seria aumentar o número de parceiros locais para passeios.",
      autor: "Marina Silveira",
      likes: 8,
      dislikes: 0,
      likedBy: [],
      dislikedBy: [],
      comentarios: [
        {
          id: 3,
          autor: "Rafael",
          texto: "Exatamente! Eles me ajudaram várias vezes sem enrolação.",
          likes: 4,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          respostas: [],
        },
      ],
    },
    {
      id: 3,
      idAgencia: 1,
      titulo: "Economia Real com Comparador de Planos",
      conteudo: "O sistema de comparação da plataforma me fez economizar quase 15% no valor total do intercâmbio. Pude escolher a melhor opção de escola e acomodação. Faltou apenas mais avaliações de outros estudantes.",
      autor: "Vinícius Pereira",
      likes: 7,
      dislikes: 0,
      likedBy: [],
      dislikedBy: [],
      comentarios: [
        {
          id: 4,
          autor: "Ana",
          texto: "Achei ótimo também, economizei bastante usando a ferramenta.",
          likes: 2,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          respostas: [],
        },
      ],
    },
    {
      id: 4,
      idAgencia: 1,
      titulo: "Experiência Completa na Austrália",
      conteudo: "Minha viagem para Sydney foi bem planejada, e adorei o acompanhamento personalizado da plataforma. O benefício de poder conversar com ex-intercambistas ajudou muito. Só achei o design do site um pouco confuso.",
      autor: "Ana Souza",
      likes: 9,
      dislikes: 1,
      likedBy: [],
      dislikedBy: [],
      comentarios: [
        {
          id: 5,
          autor: "Bruno",
          texto: "Que bom que foi completa! O site poderia melhorar mesmo.",
          likes: 3,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          respostas: [],
        },
      ],
    },
    {
      id: 5,
      idAgencia: 2,
      titulo: "Experiência Incrível no Canadá",
      conteudo: "Fiz meu intercâmbio para Toronto e foi uma das melhores experiências da minha vida. A plataforma me ajudou a comparar preços entre escolas e moradias, economizando bastante. Só senti falta de mais suporte durante os primeiros dias lá.",
      autor: "Larissa Martins",
      likes: 10,
      dislikes: 2,
      likedBy: [],
      dislikedBy: [],
      comentarios: [
        {
          id: 6,
          autor: "Lucas",
          texto: "Que bom saber! Estou planejando ir para Toronto também.",
          likes: 4,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          respostas: [],
        },
      ],
    },
    {
      id: 6,
      idAgencia: 2,
      titulo: "Troca Cultural Verdadeira",
      conteudo: "Fui para a Nova Zelândia e tive uma imersão cultural incrível. A plataforma ajudou a encontrar host families com ótimo custo-benefício. Porém, o chat com os consultores às vezes demorava para responder.",
      autor: "Rafael Gomes",
      likes: 6,
      dislikes: 1,
      likedBy: [],
      dislikedBy: [],
      comentarios: [
        {
          id: 7,
          autor: "Camila",
          texto: "Isso aconteceu comigo também, mas a experiência compensou.",
          likes: 3,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          respostas: [],
        },
      ],
    },
    {
      id: 7,
      idAgencia: 2,
      titulo: "Intercâmbio para Londres",
      conteudo: "A experiência foi inesquecível. As dicas culturais da plataforma me ajudaram muito a me adaptar rápido. Só acho que poderiam atualizar as informações sobre transporte público local com mais frequência.",
      autor: "Beatriz Rocha",
      likes: 5,
      dislikes: 0,
      likedBy: [],
      dislikedBy: [],
      comentarios: [
        {
          id: 8,
          autor: "Fernando",
          texto: "Também senti falta de algumas informações, mas adorei Londres!",
          likes: 2,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          respostas: [],
        },
      ],
    },
    {
      id: 8,
      idAgencia: 3,
      titulo: "Organização Excelente",
      conteudo: "A equipe da agência foi super organizada, cuidando desde o visto até o transporte. O app mostrou todas as etapas do processo em tempo real. Gostaria apenas que tivessem mais opções de destinos na Ásia.",
      autor: "Gabriel Ferraz",
      likes: 7,
      dislikes: 0,
      likedBy: [],
      dislikedBy: [],
      comentarios: [
        {
          id: 9,
          autor: "Camila",
          texto: "Também senti falta de mais opções na Ásia, mas o atendimento é ótimo!",
          likes: 2,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          respostas: [],
        },
      ],
    },
    {
      id: 9,
      idAgencia: 3,
      titulo: "Acompanhamento Antes e Depois da Viagem",
      conteudo: "Gostei de como a agência mantém contato mesmo após o retorno. Isso me fez sentir valorizada como cliente. Só achei o sistema de pagamento um pouco confuso no início.",
      autor: "Camila Oliveira",
      likes: 6,
      dislikes: 1,
      likedBy: [],
      dislikedBy: [],
      comentarios: [
        {
          id: 10,
          autor: "Lucas",
          texto: "Isso é verdade, o suporte pós-viagem é essencial.",
          likes: 3,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          respostas: [],
        },
      ],
    },
    {
      id: 10,
      idAgencia: 3,
      titulo: "Facilidade no Processo de Visto",
      conteudo: "Achei sensacional como o site explica passo a passo o processo de visto. Isso me deixou muito mais tranquilo antes da viagem. Apenas senti falta de mais vídeos explicativos.",
      autor: "Lucas Fernandes",
      likes: 8,
      dislikes: 0,
      likedBy: [],
      dislikedBy: [],
      comentarios: [
        {
          id: 11,
          autor: "Beatriz",
          texto: "Concordo, um vídeo tutorial ajudaria muito!",
          likes: 4,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          respostas: [],
        },
      ],
    },
  ];


  /* ------------------------------ LOCAL STORAGE ------------------------------ */

  salvarLocalStorage() {
    localStorage.setItem(`forum_agencia_${this.agenciaId}`, JSON.stringify(this.posts));
  }

  /* ------------------------------ CRIAR POST ------------------------------ */

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
      editando: false,
      idAgencia: this.agenciaId
    };

    this.posts.unshift(novo);
    this.novoTitulo = '';
    this.novoConteudo = '';

    this.salvarLocalStorage();
  }

  salvarEdicaoPost(p: Post, titulo?: string, conteudo?: string) {
    if (titulo) p.titulo = titulo;
    if (conteudo) p.conteudo = conteudo;
    p.editando = false;
    this.salvarLocalStorage();
  }

  excluirPost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
    this.salvarLocalStorage();
  }

  /* ------------------------------ LIKE / DISLIKE POST ------------------------------ */

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

  /* ------------------------------ COMENTÁRIOS ------------------------------ */

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

  /* ------------------------------ ORDENAÇÃO ------------------------------ */

  get postsFiltradosOrdenados(): Post[] {
    const filtrados = this.posts.filter(p => p.idAgencia === this.agenciaId);

    if (this.ordenarPor === 'likes') {
      return [...filtrados].sort((a, b) =>
        (b.likes - b.dislikes) - (a.likes - a.dislikes)
      );
    }

    return [...filtrados].sort((a, b) => b.id - a.id);
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
