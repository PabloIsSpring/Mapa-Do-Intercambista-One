import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { Agencia } from '../models/agencia';

@Component({
  selector: 'app-intercambista-grafico',
  standalone: false,
  templateUrl: './intercambista-grafico.html',
  styleUrl: './intercambista-grafico.css'
})
export class IntercambistaGrafico implements OnInit {
  
  paisEscolhido: string = '';
  melhorAgencia: Agencia | undefined = {}
  precoMedio: number = 0;

  ngOnInit(): void {
    for(let i: number = 0; i < this.agenciasJSON.length; i++){
      this.agenciasJSON[i].preco = Math.random() * (33000 - 12000) + 12000;
    }
  }

  mudarPacotes(): void {
    let agenciaComPacote = this.agenciasJSON.filter(a => a.pacotes?.includes(this.paisEscolhido))

    this.melhorAgencia = agenciaComPacote.reduce<Agencia | undefined>((melhor, atual) => {
    if (!melhor || (atual.avaliacao ?? 0) > (melhor.avaliacao ?? 0)) {
      return atual;
    }
    return melhor;}, 
    undefined);

    let somaPrecos = agenciaComPacote.reduce((total, a) => total + (a.preco ?? 0), 0);
    this.precoMedio = somaPrecos / agenciaComPacote.length;

    this.atualizarGraficoBarra()
  }

  atualizarGraficoBarra(): void {
    let tmpAgencias = this.agenciasJSON.filter(a => a.pacotes?.includes(this.paisEscolhido))
    
    const labels = tmpAgencias.map(a => a.nome);

    const data = tmpAgencias.map(a => a.preco ?? 0);

    this.barChartData = {
      labels,
      datasets: [
        {
          data,
          label: `Preços das agências para ${this.paisEscolhido}`,
          backgroundColor: ['#568FF9']
        }
      ]
    };
  }

  public barChartData : any = {
    labels: [],
    datasets: [
      {
        data: [], label: '',
        backgroundColor: [""]
      }
    ]
  };

  public barChartType: ChartType = 'bar';

  // Gráfico de linhas
  public lineChartData = {
  labels: ['nov', 'dez', 'jan', 'fev', 'mar', 'abr'],
  datasets: [
    {
      data: [18000, 20000, 24000, 21000, 19000, 17500], label: 'Tendência',
      borderColor: ["#568FF9"],
      backgroundColor: ["#84a0d4ff"],
      pointBackgroundColor: ["#7b97caff"],
      pointBorderColor: ["#071f4dff"],
      tension: 0.3
    }
  ]
};
  public lineChartType: ChartType = 'line';

  // Configurações padrão
  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: { legend: { display: false } }
  };

  // Tabela
  agencias = [
    { nome: 'Agência A', pais: 'EUA', tipoPrograma: 'Estudo', duracao: 'Médio', valor: 20000 },
    { nome: 'Agência B', pais: 'Canadá', tipoPrograma: 'Trabalho', duracao: 'Curto', valor: 22000 },
    { nome: 'Agência C', pais: 'Irlanda', tipoPrograma: 'Curso', duracao: 'Longo', valor: 18000 },
    { nome: 'Agência D', pais: 'Austrália', tipoPrograma: 'Trabalho', duracao: 'Curto', valor: 19000 },
  ];

  agenciasJSON: Agencia [] = [
    {
      id: 1, 
      nome:'Explore Abroad', 
      descricao:'A cultura do Explore Abroad é voltada à inovação e diversidade de experiências internacionais. A agência valoriza o crescimento pessoal e profissional dos estudantes, incentivando o aprendizado por meio de vivências culturais. É conhecida por um ambiente profissional moderno, colaborativo e centrado no cliente, com foco em oferecer soluções educacionais de qualidade.', 
      foto:'images/agencia1.png', 
      destinos: ['images/japao.jpg', 'images/espanha.jpg', 'images/canada.jpg'],
      pacotes: ['japao', 'espanha', 'canada'],
      avaliacao: 5,
      qtdAval: 37,
      preco: 0
    },
    {
      id: 2, 
      nome:'Journey Hub', 
      descricao:'A Journey Hub tem uma cultura dinâmica e acolhedora, com forte ênfase no atendimento personalizado. Preza por proximidade com o cliente e por criar planos de intercâmbio sob medida. A empresa valoriza o espírito jovem e aventureiro, estimulando seus colaboradores e estudantes a buscar novas experiências e ampliar horizontes culturais.', 
      foto:'images/agencia2.png', 
      destinos:['images/canada.jpg', 'images/espanha.jpg', 'images/mexico.jpg'],
      pacotes: ['canada', 'espanha', 'mexico'],
      avaliacao: 4,
      qtdAval: 41,
      preco: 0
    },
    {
      id: 3, 
      nome:'Gateway Exchange', 
      descricao:'A Gateway Exchange possui uma cultura baseada em inovação, confiança e entusiasmo por viagens. Estimula o desenvolvimento pessoal por meio de experiências internacionais transformadoras. Sua equipe tem perfil empreendedor e comunicativo, sempre buscando soluções criativas para tornar o intercâmbio acessível e inspirador.', 
      foto:'images/agencia3.png', 
      destinos:['images/eua.jpg', 'images/alemanha.jpg', 'images/italia.jpg'],
      pacotes: ['eua', 'alemanha', 'italia'],
      avaliacao: 4,
      qtdAval: 37,
      preco: 0
    },
    {
      id: 4, 
      nome:'Future Exploring', 
      descricao:'A cultura da Future Exploring é voltada à inovação e diversidade de experiências internacionais. A agência valoriza o crescimento pessoal e profissional dos estudantes, incentivando o aprendizado por meio de vivências culturais. É conhecida por um ambiente profissional moderno, colaborativo e centrado no cliente, com foco em oferecer soluções educacionais de qualidade.', 
      foto:'images/agencia4.jpg', 
      destinos:['images/portugal.jpg', 'images/inglaterra.jpg'],
      pacotes: ['portugal', 'inglaterra'],
      avaliacao: 5,
      qtdAval: 28,
      preco: 0
    },
    // --- Início das 10 agências adicionadas ---
    {
      id: 5, 
      nome:'World Trekkers', 
      descricao:'A World Trekkers foca em intercâmbios de longa duração, promovendo imersão total na cultura local. Sua cultura é de responsabilidade e suporte contínuo ao aluno, desde o planejamento até o retorno. Valoriza a autonomia e o crescimento através da superação de desafios internacionais.', 
      foto:'images/agencia5.png', 
      destinos:['images/irlanda.jpg', 'images/canada.jpg', 'images/japao.jpg'],
      pacotes: ['irlanda', 'canada', 'japao'],
      avaliacao: 4,
      qtdAval: 55,
      preco: 0
    },
    {
      id: 6, 
      nome:'Global Connect', 
      descricao:'Com foco em intercâmbios de idiomas e programas de trabalho-estudo, a Global Connect preza pela flexibilidade e diversidade de opções. Sua cultura é vibrante, jovem e centrada em facilitar a conexão global dos seus clientes, oferecendo suporte multilingue e especializado.', 
      foto:'images/agencia6.png', 
      destinos:['images/nova-zelandia.jpg', 'images/inglaterra.jpg', 'images/espanha.jpg'],
      pacotes: ['nova-zelandia', 'inglaterra', 'espanha'],
      avaliacao: 5,
      qtdAval: 32,
      preco: 0
    },
    {
      id: 7, 
      nome:'Horizon Study', 
      descricao:'A Horizon Study é especializada em programas acadêmicos e universitários. Possui uma cultura de excelência e rigor na seleção de instituições parceiras. O foco está no alto desempenho e na construção de um currículo internacional sólido para seus estudantes.', 
      foto:'images/agencia7.png', 
      destinos:['images/eua.jpg', 'images/alemanha.jpg', 'images/portugal.jpg'],
      pacotes: ['eua', 'alemanha', 'portugal'],
      avaliacao: 4,
      qtdAval: 68,
      preco: 0
    },
    {
      id: 8, 
      nome:'Venture Immersion', 
      descricao:'Com forte presença na América Latina, a Venture Immersion é conhecida pelo atendimento caloroso e pela criação de pacotes com foco em custo-benefício. Sua cultura é acolhedora e busca desmistificar o intercâmbio, tornando-o acessível a todos.', 
      foto:'images/agencia8.png', 
      destinos:['images/mexico.jpg', 'images/espanha.jpg', 'images/italia.jpg'],
      pacotes: ['mexico', 'espanha', 'italia'],
      avaliacao: 4,
      qtdAval: 49,
      preco: 0
    },
    {
      id: 9, 
      nome:'Cultural Bridges', 
      descricao:'A Cultural Bridges se dedica a intercâmbios culturais com ênfase em voluntariado e programas de au pair. Sua cultura é baseada na troca de experiências e no impacto social. Valoriza a empatia e a construção de laços interculturais duradouros.', 
      foto:'images/agencia9.png', 
      destinos:['images/japao.jpg', 'images/inglaterra.jpg', 'images/irlanda.jpg'],
      pacotes: ['japao', 'inglaterra', 'irlanda'],
      avaliacao: 5,
      qtdAval: 19,
      preco: 0
    },
    {
      id: 10, 
      nome:'Pioneer Exchange', 
      descricao:'Especializada em destinos exóticos e menos tradicionais, a Pioneer Exchange tem uma cultura de aventura e descoberta. Seu foco é oferecer experiências únicas, fora do circuito comum, com suporte robusto para destinos desafiadores.', 
      foto:'images/agencia10.png', 
      destinos:['images/nova_zelandia.jpg', 'images/portugal.jpg', 'images/canada.jpg'],
      pacotes: ['nova_zelandia', 'portugal', 'canada'],
      avaliacao: 4,
      qtdAval: 51,
      preco: 0
    },
    {
      id: 11, 
      nome:'Connect Abroad', 
      descricao:'A Connect Abroad se destaca pela tecnologia e automação no processo de intercâmbio, oferecendo aplicativos e plataformas para gerenciar a viagem. Sua cultura é de eficiência e modernidade, simplificando a logística para o estudante.', 
      foto:'images/agencia11.png', 
      destinos:['images/alemanha.jpg', 'images/eua.jpg', 'images/mexico.jpg'],
      pacotes: ['alemanha', 'eua', 'mexico'],
      avaliacao: 5,
      qtdAval: 44,
      preco: 0
    },
    {
      id: 12, 
      nome:'Go Global Education', 
      descricao:'Focada em programas de high school e ensino médio no exterior, a Go Global Education oferece consultoria especializada para jovens. Sua cultura é de segurança, acompanhamento parental e foco no desenvolvimento educacional e social.', 
      foto:'images/agencia12.png', 
      destinos:['images/canada.jpg', 'images/irlanda.jpg', 'images/inglaterra.jpg'],
      pacotes: ['canada', 'irlanda', 'inglaterra'],
      avaliacao: 4,
      qtdAval: 39,
      preco: 0
    },
    {
      id: 13, 
      nome:'Next Step Travel', 
      descricao:'A Next Step Travel é conhecida por sua rápida resposta e solução de problemas, com uma cultura de suporte 24/7. Oferece pacotes de última hora e programas flexíveis, valorizando a prontidão e a adaptabilidade.', 
      foto:'images/agencia13.png', 
      destinos:['images/espanha.jpg', 'images/japao.jpg', 'images/nova_zelandia.jpg'],
      pacotes: ['espanha', 'japao', 'nova_zelandia'],
      avaliacao: 5,
      qtdAval: 62,
      preco: 0
    },
    {
      id: 14, 
      nome:'Elite Exchange Programs', 
      descricao:'Especializada em programas premium e intercâmbios executivos. Sua cultura é de exclusividade, qualidade e networking de alto nível. Destina-se a profissionais e estudantes que buscam uma experiência de luxo e contatos profissionais valiosos.', 
      foto:'images/agencia14.png', 
      destinos:['images/italia.jpg', 'images/portugal.jpg', 'images/eua.jpg'],
      pacotes: ['italia', 'portugal', 'eua'],
      avaliacao: 4,
      qtdAval: 25,
      preco: 0
    }
  ]
}
