import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pacote-detalhe',
  standalone: false,
  templateUrl: './pacote-detalhe.html',
  styleUrl: './pacote-detalhe.css'
})
export class PacoteDetalhe implements OnInit {

  pais: string = '';
  detalhes: any;

  pacotes = [
    {
      nome: 'canada',
      titulo: 'Intercâmbio no Canadá',
      descricao: 'O Canadá é um dos destinos mais procurados por estudantes do mundo todo. Além de ser um país bilíngue, com opções de estudo em inglês e francês, oferece segurança, qualidade de vida e instituições de ensino reconhecidas internacionalmente. Uma oportunidade perfeita para quem busca crescimento acadêmico e pessoal em um ambiente acolhedor e multicultural.',
      preco: 'A partir de R$ 15.000,00',
      duracao: '6 meses'
    },
    {
      nome: 'irlanda',
      titulo: 'Intercâmbio na Irlanda',
      descricao: 'A Irlanda é o destino ideal para quem deseja estudar e trabalhar legalmente ao mesmo tempo. Com um povo simpático, paisagens encantadoras e uma vibrante vida cultural, o país oferece experiências únicas para estudantes internacionais. É uma excelente opção para quem quer aprimorar o inglês e viver momentos inesquecíveis.',
      preco: 'A partir de R$ 12.500,00',
      duracao: '6 meses'
    },
    {
      nome: 'australia',
      titulo: 'Intercâmbio na Austrália',
      descricao: 'A Austrália combina ensino de alta qualidade, praias paradisíacas e uma cultura jovem e descontraída. Estudar e trabalhar no país é sinônimo de aprendizado, aventuras e novas amizades. Com cidades modernas e um clima agradável, é o destino perfeito para quem busca equilíbrio entre estudos e lazer.',
      preco: 'A partir de R$ 18.000,00',
      duracao: '6 meses'
    },
    {
      nome: 'nova-zelandia',
      titulo: 'Intercâmbio na Nova Zelândia',
      descricao: 'Viva a experiência única de estudar em um dos países mais seguros e sustentáveis do mundo. A Nova Zelândia encanta por suas paisagens naturais e pela qualidade de ensino reconhecida globalmente. Ideal para quem busca tranquilidade, contato com a natureza e uma formação de excelência.',
      preco: 'A partir de R$ 14.800,00',
      duracao: '6 meses'
    },
    {
      nome: 'estados-unidos',
      titulo: 'Intercâmbio nos Estados Unidos',
      descricao: 'Os Estados Unidos oferecem uma imersão completa em uma das culturas mais influentes do planeta. Com universidades renomadas e programas educacionais variados, o país é o destino certo para quem deseja expandir horizontes, aperfeiçoar o inglês e viver o sonho americano de perto.',
      preco: 'A partir de R$ 17.000,00',
      duracao: '6 meses'
    },
    {
      nome: 'reino-unido',
      titulo: 'Intercâmbio no Reino Unido',
      descricao: 'Estude em algumas das instituições mais prestigiadas do mundo e mergulhe na cultura britânica. O Reino Unido oferece uma combinação perfeita entre tradição e modernidade, proporcionando uma experiência acadêmica enriquecedora e um forte crescimento pessoal e profissional.',
      preco: 'A partir de R$ 19.500,00',
      duracao: '6 meses'
    },
    {
      nome: 'alemanha',
      titulo: 'Intercâmbio na Alemanha',
      descricao: 'Fazer um intercâmbio na Alemanha é investir em uma das economias mais fortes e inovadoras do mundo. Com um sistema educacional de ponta e excelentes oportunidades para estudantes internacionais, o país combina tradição, tecnologia e qualidade de vida em um só lugar.',
      preco: 'A partir de R$ 16.800,00',
      duracao: '6 meses'
    },
    {
      nome: 'japao',
      titulo: 'Intercâmbio no Japão',
      descricao: 'Com uma mistura fascinante de tradição milenar e tecnologia de ponta, o Japão proporciona uma experiência transformadora. O país é ideal para quem busca imersão cultural, aprendizado do idioma japonês e desenvolvimento pessoal em um ambiente seguro e inspirador.',
      preco: 'A partir de R$ 20.000,00',
      duracao: '6 meses'
    },
    {
      nome: 'inglaterra',
      titulo: 'Intercâmbio na Inglaterra',
      descricao: 'A Inglaterra combina excelência no ensino com imersão cultural, sendo ideal para quem busca crescimento pessoal e profissional enquanto aperfeiçoa o inglês. Estudar no berço da língua inglesa é viver uma experiência única de aprendizado e cultura.',
      preco: 'A partir de R$ 18.900,00',
      duracao: '6 meses'
    },
    {
      nome: 'portugal',
      titulo: 'Intercâmbio em Portugal',
      descricao: 'Portugal oferece ensino de qualidade, cultura acolhedora e custo de vida acessível. É um destino cada vez mais procurado por estudantes brasileiros que buscam qualidade de vida, aprendizado e uma transição tranquila para a Europa.',
      preco: 'A partir de R$ 13.200,00',
      duracao: '6 meses'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pais = this.route.snapshot.paramMap.get('pais') || '';
    this.detalhes = this.pacotes.find(p => p.nome === this.pais);
  }
}