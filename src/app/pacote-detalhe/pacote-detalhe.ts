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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pais = this.route.snapshot.paramMap.get('pais') || '';
    this.detalhes = this.pacotes.find(p => p.nome === this.pais);

    for (let i: number = 0; i < this.agencias.length; i++) {
      this.agencias[i].preco = Math.random() * (30000 - 12000) + 12000;
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
      descricao:
        'Fazer intercâmbio no Canadá é ideal para quem busca ensino de excelência, cidades seguras e convivência com diferentes culturas. O país é bilíngue — inglês e francês — e oferece universidades e colleges com reconhecimento mundial. O custo de vida fica entre R$ 7.000 e R$ 10.000 por mês, e é necessário comprovar cerca de R$ 70.000 para o visto de estudante. Toronto, Vancouver e Montreal são os principais destinos, combinando infraestrutura moderna, qualidade de vida e oportunidades de trabalho. Apesar do clima frio, a experiência proporciona desenvolvimento pessoal, fluência em um novo idioma e portas abertas para o mercado internacional.',
      preco: 'A partir de R$ 15.000,00',
      duracao: '6 meses',
      imagem: 'images/canada.jpg'
    },

    {
      nome: 'irlanda',
      titulo: 'Intercâmbio na Irlanda',
      descricao:
        'A Irlanda é uma das escolhas favoritas entre estudantes que buscam acessibilidade, boas escolas e facilidade para conciliar estudo e trabalho. O país é acolhedor, repleto de história e tem uma grande comunidade brasileira, o que facilita a adaptação. O custo de vida gira entre R$ 6.000 e R$ 9.000 mensais, e o visto exige comprovação de cerca de R$ 55.000. Cidades como Dublin, Cork e Galway oferecem forte vida cultural, segurança e ótimas instituições de ensino. O clima chuvoso e o alto valor dos aluguéis podem ser desafios, mas a experiência proporciona amadurecimento, independência e networking global.',
      preco: 'A partir de R$ 12.500,00',
      duracao: '6 meses',
      imagem: 'images/irlanda.jpg'
    },

    {
      nome: 'australia',
      titulo: 'Intercâmbio na Austrália',
      descricao:
        'A Austrália combina ensino de alto nível com clima agradável, praias paradisíacas e um ambiente acolhedor. Multicultural e moderna, é um dos destinos mais procurados por quem deseja estudar e trabalhar ao mesmo tempo. O custo de vida varia entre R$ 7.000 e R$ 10.000 por mês, e o visto exige comprovação de aproximadamente R$ 70.000. Sydney, Melbourne e Brisbane se destacam pelas universidades renomadas, infraestrutura e estilo de vida dinâmico. O fuso horário e o custo elevado podem gerar desafios, mas o intercâmbio na Austrália oferece crescimento acadêmico, qualidade de vida e experiências marcantes.',
      preco: 'A partir de R$ 18.000,00',
      duracao: '6 meses',
      imagem: 'images/australia.jpg'
    },

    {
      nome: 'nova-zelandia',
      titulo: 'Intercâmbio na Nova Zelândia',
      descricao:
        'A Nova Zelândia é perfeita para quem busca estudo, tranquilidade e contato direto com paisagens naturais impressionantes. O país é seguro, acolhedor e valoriza muito a educação internacional, oferecendo universidades modernas e ensino voltado para prática e inovação. O custo de vida varia entre R$ 6.000 e R$ 9.000 mensais, com exigência de cerca de R$ 65.000 para o visto. Auckland, Wellington e Christchurch são destaques por sua qualidade de vida e diversidade cultural. A distância do Brasil e o valor das passagens podem pesar, mas o intercâmbio garante aprendizado, maturidade e experiências inesquecíveis.',
      preco: 'A partir de R$ 14.800,00',
      duracao: '6 meses',
      imagem: 'images/nova-zelandia.jpg'
    },

    {
      nome: 'estados-unidos',
      titulo: 'Intercâmbio nos Estados Unidos',
      descricao:
        'Os Estados Unidos oferecem um dos sistemas educacionais mais prestigiados do mundo, com universidades renomadas e inúmeras opções de cursos — desde inglês até programas completos de graduação. O custo de vida varia entre R$ 8.000 e R$ 12.000 por mês, e o processo de visto exige comprovação de cerca de R$ 80.000. Nova York, Boston e Los Angeles são destinos populares por sua vida universitária ativa e diversidade cultural. Apesar dos custos elevados e do ritmo acelerado, o intercâmbio nos EUA proporciona networking, crescimento acadêmico e experiências que impactam diretamente o futuro profissional.',
      preco: 'A partir de R$ 17.000,00',
      duracao: '6 meses',
      imagem: 'images/eua.jpg',
      intercambista: 'images/intercambista-eua.png'
    },

    {
      nome: 'alemanha',
      titulo: 'Intercâmbio na Alemanha',
      descricao:
        'A Alemanha é um destino excelente para quem busca educação de alto nível aliada à organização e ao forte incentivo governamental. Muitas universidades oferecem cursos gratuitos ou com valores acessíveis, inclusive para estrangeiros. O custo de vida fica entre R$ 5.500 e R$ 8.000 mensais, e o visto exige comprovação de cerca de R$ 67.000. Berlim, Munique e Heidelberg se destacam pela infraestrutura, segurança e equilíbrio entre tradição e modernidade. A barreira do idioma e o clima frio podem exigir adaptação, mas o intercâmbio garante enriquecimento cultural, autonomia e grandes oportunidades acadêmicas.',
      preco: 'A partir de R$ 16.800,00',
      duracao: '6 meses',
      imagem: 'images/alemanha.jpg',
      intercambista: 'images/intercambista-alemanha.jpg'
    },

    {
      nome: 'japao',
      titulo: 'Intercâmbio no Japão',
      descricao:
        'O Japão é ideal para quem deseja viver uma combinação única de tradição milenar e inovação tecnológica. O país é extremamente seguro, organizado e reconhecido pela excelência acadêmica. O custo de vida varia entre R$ 6.000 e R$ 9.000 por mês, sendo necessária a comprovação de aproximadamente R$ 70.000 para o visto. Tóquio, Quioto e Osaka oferecem universidades respeitadas, cultura vibrante e oportunidades de aprendizado imersivo. O idioma, o ritmo intenso e o custo elevado podem ser desafios, mas o intercâmbio proporciona crescimento pessoal profundo e vivências culturais inesquecíveis.',
      preco: 'A partir de R$ 20.000,00',
      duracao: '6 meses',
      imagem: 'images/japao.jpg'
    },

    {
      nome: 'reino-unido',
      titulo: 'Intercâmbio no Reino Unido',
      descricao:
        'O Reino Unido é um dos destinos mais tradicionais para estudantes que desejam excelência acadêmica, imersão no inglês e contato direto com uma rica herança cultural. Com universidades de prestígio mundial e cidades que respiram história e modernidade, o país oferece experiências completas para estudantes internacionais. O custo de vida varia entre R$ 8.000 e R$ 12.000 por mês, e o processo de visto exige comprovação de cerca de R$ 80.000. Londres, Manchester e Edinburgh são destinos procurados pela diversidade, vida universitária ativa e ótimas oportunidades culturais. O clima frio e o custo elevado podem ser desafiadores, mas o intercâmbio no Reino Unido garante desenvolvimento acadêmico, networking global e experiências memoráveis.',
      preco: 'A partir de R$ 18.900,00',
      duracao: '6 meses',
      imagem: 'images/reino-unido.jpg'
    },

    {
      nome: 'portugal',
      titulo: 'Intercâmbio em Portugal',
      descricao:
        'Portugal é uma excelente opção para quem busca ensino de qualidade com facilidade de adaptação graças ao idioma e à cultura acolhedora. O país oferece universidades tradicionais, cidades seguras e um custo de vida moderado, entre R$ 4.000 e R$ 7.000 mensais. O visto exige comprovação de cerca de R$ 45.000. Lisboa, Porto e Coimbra se destacam pelas boas instituições de ensino, clima agradável e vida tranquila. A adaptação ao ritmo europeu e aos diferentes sotaques pode exigir atenção no início, mas o intercâmbio proporciona enriquecimento cultural, segurança e ótima qualidade de vida.',
      preco: 'A partir de R$ 13.200,00',
      duracao: '6 meses',
      imagem: 'images/portugal.jpg'
    },

    {
      nome: 'inglaterra',
      titulo: 'Intercâmbio na Inglaterra',
      descricao: 'Fazer intercâmbio na Inglaterra é uma oportunidade de estudar em um país que combina tradição, modernidade e um dos sistemas educacionais mais respeitados do mundo. O destino é ideal para quem deseja aprimorar o inglês britânico e vivenciar uma cultura rica em história, arte e diversidade. A Inglaterra oferece universidades renomadas, escolas de idiomas de alta qualidade e uma vida cultural intensa. O custo de vida fica entre R$ 8.000 e R$ 12.000 por mês, dependendo da cidade, e é necessário comprovar cerca de R$ 80.000 para o visto de estudante. As melhores cidades para estudar são Londres, Manchester e Cambridge, conhecidas por sua infraestrutura, segurança e ambiente acadêmico estimulante. Entre as principais dificuldades estão o clima frio, o alto custo de moradia e a adaptação ao ritmo acelerado das grandes cidades, mas o intercâmbio na Inglaterra proporciona crescimento pessoal, fluência no idioma e uma formação internacional valorizada no mercado de trabalho.',
      preco: 'A partir de R$ 18.900,00',
      duracao: '6 meses',
      imagem: 'images/inglaterra.jpg'
    },

    {
      nome: 'italia',
      titulo: 'Intercâmbio na Itália',
      descricao:
        'A Itália é o destino ideal para quem busca uma experiência cultural profunda, unindo história, arte, gastronomia e educação de qualidade. O país oferece universidades renomadas, escolas de idiomas bem avaliadas e um ambiente acolhedor para estudantes internacionais. O custo de vida varia entre R$ 5.000 e R$ 8.000 por mês, e é necessário comprovar cerca de R$ 50.000 para o visto de estudante. Cidades como Roma, Milão, Florença e Bolonha são destaques por sua arquitetura histórica, museus e vida acadêmica vibrante. A barreira do idioma e o clima variado podem exigir adaptação, mas o intercâmbio na Itália proporciona aprendizado intenso, experiências inesquecíveis e um contato único com a cultura mediterrânea.',
      preco: 'A partir de R$ 13.900,00',
      duracao: '6 meses',
      imagem: 'images/italia.jpg'
    },

    {
      nome: 'mexico',
      titulo: 'Intercâmbio no México',
      descricao:
        'O México é um excelente destino para quem busca estudar em um país vibrante, com cultura rica, gastronomia renomada e grande diversidade. O país oferece universidades reconhecidas na América Latina e boas escolas de espanhol, sendo ideal para quem deseja aprender ou aperfeiçoar o idioma. O custo de vida é acessível, variando entre R$ 3.500 e R$ 6.000 por mês, e o processo de visto é simples, exigindo comprovação de cerca de R$ 30.000. Cidades como Cidade do México, Guadalajara e Puebla se destacam por sua vida estudantil ativa e infraestrutura moderna. A adaptação ao clima seco e à altitude em algumas regiões pode ser desafiadora, mas o intercâmbio no México proporciona crescimento acadêmico, cultural e experiências memoráveis.',
      preco: 'A partir de R$ 9.800,00',
      duracao: '6 meses',
      imagem: 'images/mexico.jpg'
    },

    {
      nome: 'espanha',
      titulo: 'Intercâmbio na Espanha',
      descricao:
        'A Espanha é um destino muito procurado por quem deseja estudar em um país cheio de vida, cultura vibrante e clima agradável. Com universidades de prestígio, custo de vida moderado e diversas opções de cursos de espanhol, o país oferece excelente qualidade de vida para estudantes internacionais. O custo mensal varia entre R$ 4.500 e R$ 7.000, e o visto exige comprovação de cerca de R$ 45.000. Madri, Barcelona, Valência e Sevilha são cidades destaque pela infraestrutura, segurança e intensa vida cultural. A adaptação ao idioma e ao ritmo espanhol costuma ser rápida, tornando o intercâmbio na Espanha uma experiência enriquecedora, dinâmica e cheia de oportunidades.',
      preco: 'A partir de R$ 12.600,00',
      duracao: '6 meses',
      imagem: 'images/espanha.jpg'
    },




  ];


  agencias: Agencia[] = [
    {
      id: 1,
      nome: 'Explore Abroad',
      descricao: 'A cultura do Explore Abroad é voltada à inovação e diversidade de experiências internacionais. A agência valoriza o crescimento pessoal e profissional dos estudantes, incentivando o aprendizado por meio de vivências culturais. É conhecida por um ambiente profissional moderno, colaborativo e centrado no cliente, com foco em oferecer soluções educacionais de qualidade.',
      foto: 'images/agencia1.png',
      destinos: ['images/japao.jpg', 'images/espanha.jpg', 'images/canada.jpg'],
      pacotes: ['japao', 'espanha', 'canada', 'estados-unidos', 'australia', 'nova-zelandia'],
      avaliacao: 5,
      qtdAval: 37,
      preco: 0
    },
    {
      id: 2,
      nome: 'Journey Hub',
      descricao: 'A Journey Hub tem uma cultura dinâmica e acolhedora, com forte ênfase no atendimento personalizado. Preza por proximidade com o cliente e por criar planos de intercâmbio sob medida. A empresa valoriza o espírito jovem e aventureiro, estimulando seus colaboradores e estudantes a buscar novas experiências e ampliar horizontes culturais.',
      foto: 'images/agencia2.png',
      destinos: ['images/canada.jpg', 'images/espanha.jpg', 'images/mexico.jpg'],
      pacotes: ['canada', 'espanha', 'mexico', 'irlanda', 'reino-unido', 'portugal', 'australia', 'italia'],
      avaliacao: 4,
      qtdAval: 41,
      preco: 0
    },
    {
      id: 3,
      nome: 'Gateway Exchange',
      descricao: 'A Gateway Exchange possui uma cultura baseada em inovação, confiança e entusiasmo por viagens. Estimula o desenvolvimento pessoal por meio de experiências internacionais transformadoras. Sua equipe tem perfil empreendedor e comunicativo, sempre buscando soluções criativas para tornar o intercâmbio acessível e inspirador.',
      foto: 'images/agencia3.png',
      destinos: ['images/eua.jpg', 'images/alemanha.jpg', 'images/italia.jpg'],
      pacotes: ['eua', 'alemanha', 'italia', 'nova-zelandia', 'japao', 'mexico'],
      avaliacao: 4,
      qtdAval: 37,
      preco: 0
    },
    {
      id: 4,
      nome: 'Future Exploring',
      descricao: 'A cultura da Future Exploring é voltada à inovação e diversidade de experiências internacionais. A agência valoriza o crescimento pessoal e profissional dos estudantes, incentivando o aprendizado por meio de vivências culturais. É conhecida por um ambiente profissional moderno, colaborativo e centrado no cliente, com foco em oferecer soluções educacionais de qualidade.',
      foto: 'images/agencia4.jpg',
      destinos: ['images/portugal.jpg', 'images/inglaterra.jpg'],
      pacotes: ['portugal', 'inglaterra', 'nova-zelandia', 'japao', 'espanha'],
      avaliacao: 5,
      qtdAval: 28,
      preco: 0
    }
  ]


}