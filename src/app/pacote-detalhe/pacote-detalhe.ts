import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agencia } from '../models/agencia';


@Component({
  selector: 'app-pacote-detalhe',
  standalone: false,
  templateUrl: './pacote-detalhe.html',
  styleUrl: './pacote-detalhe.css',
})
export class PacoteDetalhe implements OnInit {

  pais: string = '';
  detalhes: any;
  sobre: boolean = false;
  agencia: boolean = false;
  avaliacoes: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pais = this.route.snapshot.paramMap.get('pais') || '';
    this.detalhes = this.pacotes.find(p => p.nome === this.pais);

    for(let i: number = 0; i < this.agencias.length; i++){
      this.agencias[i].preco = Math.random() * (20000 - 8500) + 4500;
    }
  }

  mostrarSobre(): void {
    this.sobre = true;
    this.agencia = false;
    this.avaliacoes = false;
  }

  mostrarAgencia(): void {
    this.sobre = false;
    this.agencia = true;
    this.avaliacoes = false;
  }

  mostrarAvaliacoes(): void {
    this.sobre = false;
    this.agencia = false;
    this.avaliacoes = true;
  }

  pacotes = [
    {
      nome: 'canada',
      titulo: 'Intercâmbio no Canadá',
      descricao: 'Fazer intercâmbio no Canadá é uma das opções mais buscadas por quem deseja unir ensino de qualidade, segurança e diversidade cultural. O país é bilíngue, com oportunidades de aprendizado em inglês e francês, e possui universidades e colleges reconhecidos mundialmente. O custo de vida varia entre R$ 7.000 e R$ 10.000 por mês, dependendo da cidade, e é necessário comprovar cerca de R$ 70.000 para o visto de estudante. As melhores cidades para estudar são Toronto, Vancouver e Montreal, que oferecem excelente infraestrutura, qualidade de vida e opções de trabalho para estudantes. As principais dificuldades estão no clima frio e na adaptação inicial, mas o intercâmbio no Canadá proporciona crescimento pessoal, fluência em um novo idioma e grandes oportunidades acadêmicas e profissionais.',
      preco: 'A partir de R$ 15.000,00',
      duracao: '6 meses',
      imagem: 'images/canada.jpg'
    },
    {
      nome: 'irlanda',
      titulo: 'Intercâmbio na Irlanda',
      descricao: 'Fazer intercâmbio na Irlanda é uma escolha popular entre estudantes que buscam ensino de qualidade, facilidade de visto e oportunidades de trabalho. O país é acolhedor, tem forte presença de brasileiros e permite conciliar estudo e emprego durante a estadia. O custo de vida varia entre R$ 6.000 e R$ 9.000 por mês, e é necessário comprovar cerca de R$ 55.000 para o visto de estudante. As melhores cidades para estudar são Dublin, Cork e Galway, que oferecem boa infraestrutura, vida cultural ativa e universidades reconhecidas. As principais dificuldades envolvem o clima chuvoso e o alto custo de moradia, mas o intercâmbio na Irlanda proporciona aprendizado, independência e uma vivência internacional inesquecível.',
      preco: 'A partir de R$ 12.500,00',
      duracao: '6 meses',
      imagem: 'images/irlanda.jpg'
    },
    {
      nome: '',
      titulo: 'Intercâmbio na Austrália',
      descricao: 'Fazer intercâmbio na Austrália é uma oportunidade de estudar em um país com alto padrão de ensino, qualidade de vida e clima agradável. O país é acolhedor, multicultural e oferece boas chances de trabalho para estudantes internacionais. O custo de vida fica entre R$ 7.000 e R$ 10.000 por mês, incluindo moradia, alimentação e transporte, e é necessário comprovar cerca de R$ 70.000 para o visto de estudante. As melhores cidades para estudar são Sydney, Melbourne e Brisbane, conhecidas por suas universidades renomadas e estilo de vida dinâmico. As principais dificuldades estão no alto custo e na adaptação ao fuso horário, mas o intercâmbio na Austrália é uma experiência completa que une estudo, cultura e novas oportunidades.',
      preco: 'A partir de R$ 18.000,00',
      duracao: '6 meses',
      imagem: 'images/australia.jpg'
    },
    {
      nome: '',
      titulo: 'Intercâmbio na Nova Zelândia',
      descricao: 'Fazer intercâmbio na Nova Zelândia é uma experiência incrível para quem busca contato com a natureza, ensino de qualidade e um estilo de vida tranquilo. O país é conhecido pela segurança, hospitalidade e incentivo à educação internacional, com universidades modernas e foco no aprendizado prático. O custo de vida varia entre R$ 6.000 e R$ 9.000 por mês, e é necessário comprovar cerca de R$ 65.000 para o visto de estudante. As melhores cidades para estudar são Auckland, Wellington e Christchurch, que oferecem ótima infraestrutura, belas paisagens e ambiente multicultural. As principais dificuldades envolvem a distância do Brasil e o alto custo das passagens, mas a experiência proporciona independência, amadurecimento e uma vivência internacional inesquecível.',
      preco: 'A partir de R$ 14.800,00',
      duracao: '6 meses',
      imagem: 'images/nova-zelandia.jpg'
    },
    {
      nome: 'estados-unidos',
      titulo: 'Intercâmbio nos Estados Unidos',
      descricao: 'Fazer intercâmbio nos Estados Unidos é uma experiência marcante que oferece acesso a um dos sistemas educacionais mais prestigiados do mundo e a uma grande diversidade cultural. O país tem universidades renomadas e variadas opções de cursos, desde idiomas até programas acadêmicos completos. O custo de vida varia entre R$ 8.000 e R$ 12.000 por mês, dependendo da cidade e do estilo de vida, e é necessário comprovar cerca de R$ 80.000 para o visto de estudante. As melhores cidades para estudar são Nova York, Boston e Los Angeles, conhecidas por sua vida universitária ativa e oportunidades culturais. As principais dificuldades envolvem o alto custo, o processo de visto e a adaptação ao ritmo acelerado, mas o intercâmbio nos Estados Unidos oferece aprendizado, networking e experiências que transformam o futuro profissional e pessoal.',
      preco: 'A partir de R$ 17.000,00',
      duracao: '6 meses',
      imagem: 'images/eua.jpg',
      intercambista: 'images/intercambista-eua.png'
    },
    {
      nome: 'alemanha',
      titulo: 'Intercâmbio na Alemanha',
      descricao: 'Fazer intercâmbio na Alemanha é uma oportunidade de aprendizado acadêmico e crescimento pessoal em um país conhecido pela qualidade de ensino e pela organização. As universidades são excelentes e muitas oferecem cursos gratuitos para estrangeiros. A convivência com os alemães pode parecer reservada no início, mas reflete valores como pontualidade e responsabilidade. O custo de vida varia entre R$ 5.500 e R$ 8.000 por mês, incluindo moradia, alimentação e transporte, e é preciso comprovar cerca de R$ 67.000 para o visto de estudante. As melhores cidades para estudar são Berlim, Munique e Heidelberg, que combinam tradição, modernidade e qualidade de vida. As principais dificuldades envolvem o idioma e a adaptação ao clima frio, além da burocracia para vistos e moradia. Apesar disso, a experiência é transformadora e oferece crescimento cultural, acadêmico e pessoal.',
      preco: 'A partir de R$ 16.800,00',
      duracao: '6 meses',
      imagem: 'images/alemanha.jpg',
      intercambista: 'images/intercambista-alemanha.jpg'
    },
    {
      nome: 'japao',
      titulo: 'Intercâmbio no Japão',
      descricao: 'Fazer intercâmbio no Japão é uma experiência que combina tradição e modernidade em um país conhecido pela excelência acadêmica, segurança e organização. As universidades valorizam a disciplina e a inovação, e muitas oferecem cursos em inglês. O custo de vida varia entre R$ 6.000 e R$ 9.000 por mês, sendo necessário comprovar cerca de R$ 70.000 para o visto de estudante. As melhores cidades para estudar são Tóquio, Quioto e Osaka, que unem cultura, tecnologia e boas oportunidades. As principais dificuldades estão no idioma, no ritmo de estudos e no custo elevado, mas a experiência é transformadora e oferece crescimento pessoal e cultural.',
      preco: 'A partir de R$ 20.000,00',
      duracao: '6 meses',
      imagem: 'images/japao.jpg'
    },
    {
      nome: 'inglaterra',
      titulo: 'Intercâmbio na Inglaterra',
      descricao: 'Fazer intercâmbio na Inglaterra é uma oportunidade de estudo e crescimento em um país com ensino de excelência e ambiente multicultural. As universidades são renomadas e atraem estudantes do mundo todo. O custo de vida fica entre R$ 8.000 e R$ 12.000 por mês, e é necessário comprovar cerca de R$ 80.000 para o visto de estudante. As melhores cidades para estudar são Londres, Manchester e Cambridge, conhecidas pela qualidade acadêmica e cultural. As principais dificuldades envolvem o alto custo e o clima frio, mas a experiência é valiosa e transformadora.',
      preco: 'A partir de R$ 18.900,00',
      duracao: '6 meses',
      imagem: 'images/inglaterra.jpg'
    },
    {
      nome: 'portugal',
      titulo: 'Intercâmbio em Portugal',
      descricao: 'Fazer intercâmbio em Portugal é uma ótima opção para quem busca ensino de qualidade em um país acolhedor e com o mesmo idioma. As universidades portuguesas têm tradição acadêmica e recebem muitos estudantes brasileiros, facilitando a adaptação cultural. O custo de vida é mais acessível que em outros países europeus, variando entre R$ 4.000 e R$ 7.000 por mês, e é necessário comprovar cerca de R$ 45.000 para o visto de estudante. As melhores cidades para estudar são Lisboa, Porto e Coimbra, que oferecem boas universidades, segurança e qualidade de vida. As principais dificuldades estão na adaptação ao ritmo europeu e nas diferenças de sotaque e expressões, mas a experiência é enriquecedora e garante crescimento pessoal e acadêmico.',
      preco: 'A partir de R$ 13.200,00',
      duracao: '6 meses',
      imagem: 'images/portugal.jpg'
    }
  ];

   agencias: Agencia [] = [
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
      }
    ]

  
}