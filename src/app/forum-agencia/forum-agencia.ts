import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Forum } from '../models/forum';

@Component({
  selector: 'app-forum-agencia',
  standalone: false,
  templateUrl: './forum-agencia.html',
  styleUrl: './forum-agencia.css'
})
export class ForumAgencia implements OnInit{
  agenciaId: number = 0;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      this.agenciaId = Number(this.route.snapshot.params['id'] ?? 0);
  }

  forumsAgencias: Forum[] = [
  {idAgencia: 1, cliente:{
      primeiroNome: "Hiago", 
      sobrenome: "Costa Brisola", 
      email: "hiago.brisola@email.com", 
      senha: "12345"
    }, 
    titulo: "Velocidade do Intercâmbio", 
    conteudo: "Eu achei a maneira com qual essa agência trabalha muito ágil, conseguiu me ajudar muito no que eu precisava resolver com relação à documentação e deu boas dicas para o embarque. Além disso, na volta, fizeram um breve acompanhamento para entender como foi a viagem e a experiência no país."
  },

  {idAgencia: 2, cliente:{
      primeiroNome: "Larissa", 
      sobrenome: "Martins", 
      email: "larissamartins@email.com", 
      senha: "larissa2024"
    }, 
    titulo: "Experiência Incrível no Canadá", 
    conteudo: "Fiz meu intercâmbio para Toronto e foi uma das melhores experiências da minha vida. A plataforma me ajudou a comparar preços entre escolas e moradias, economizando bastante. Só senti falta de mais suporte durante os primeiros dias lá."
  },

  {idAgencia: 3, cliente:{
      primeiroNome: "Gabriel", 
      sobrenome: "Ferraz", 
      email: "gabrielferraz@email.com", 
      senha: "gf2025"
    }, 
    titulo: "Organização Excelente", 
    conteudo: "A equipe da agência foi super organizada, cuidando desde o visto até o transporte. O app mostrou todas as etapas do processo em tempo real. Gostaria apenas que tivessem mais opções de destinos na Ásia."
  },

  {idAgencia: 1, cliente:{
      primeiroNome: "Marina", 
      sobrenome: "Silveira", 
      email: "marina.silveira@email.com", 
      senha: "mari123"
    }, 
    titulo: "Suporte 24h Realmente Funciona", 
    conteudo: "Durante minha estadia na Irlanda, precisei de ajuda com o alojamento e fui atendida na hora pela equipe. O suporte foi rápido e eficaz. Uma melhoria seria aumentar o número de parceiros locais para passeios."
  },

  {idAgencia: 2, cliente:{
      primeiroNome: "Rafael", 
      sobrenome: "Gomes", 
      email: "rafaelgomes@email.com", 
      senha: "rgomes"
    }, 
    titulo: "Troca Cultural Verdadeira", 
    conteudo: "Fui para a Nova Zelândia e tive uma imersão cultural incrível. A plataforma ajudou a encontrar host families com ótimo custo-benefício. Porém, o chat com os consultores às vezes demorava para responder."
  },

  {idAgencia: 3, cliente:{
      primeiroNome: "Camila", 
      sobrenome: "Oliveira", 
      email: "camila.oliveira@email.com", 
      senha: "camiolive"
    }, 
    titulo: "Acompanhamento Antes e Depois da Viagem", 
    conteudo: "Gostei de como a agência mantém contato mesmo após o retorno. Isso me fez sentir valorizada como cliente. Só achei o sistema de pagamento um pouco confuso no início."
  },

  {idAgencia: 1, cliente:{
      primeiroNome: "Vinícius", 
      sobrenome: "Pereira", 
      email: "vinicius.pereira@email.com", 
      senha: "vini2024"
    }, 
    titulo: "Economia Real com Comparador de Planos", 
    conteudo: "O sistema de comparação da plataforma me fez economizar quase 15% no valor total do intercâmbio. Pude escolher a melhor opção de escola e acomodação. Faltou apenas mais avaliações de outros estudantes."
  },

  {idAgencia: 2, cliente:{
      primeiroNome: "Beatriz", 
      sobrenome: "Rocha", 
      email: "beatriz.rocha@email.com", 
      senha: "biaRocha"
    }, 
    titulo: "Intercâmbio para Londres", 
    conteudo: "A experiência foi inesquecível. As dicas culturais da plataforma me ajudaram muito a me adaptar rápido. Só acho que poderiam atualizar as informações sobre transporte público local com mais frequência."
  },

  {idAgencia: 3, cliente:{
      primeiroNome: "Lucas", 
      sobrenome: "Fernandes", 
      email: "lucas.fernandes@email.com", 
      senha: "lfernandes"
    }, 
    titulo: "Facilidade no Processo de Visto", 
    conteudo: "Achei sensacional como o site explica passo a passo o processo de visto. Isso me deixou muito mais tranquilo antes da viagem. Apenas senti falta de mais vídeos explicativos."
  },

  {idAgencia: 1, cliente:{
      primeiroNome: "Ana", 
      sobrenome: "Souza", 
      email: "ana.souza@email.com", 
      senha: "anas123"
    }, 
    titulo: "Experiência Completa na Austrália", 
    conteudo: "Minha viagem para Sydney foi bem planejada, e adorei o acompanhamento personalizado da plataforma. O benefício de poder conversar com ex-intercambistas ajudou muito. Só achei o design do site um pouco confuso."
  }
]
 
}
