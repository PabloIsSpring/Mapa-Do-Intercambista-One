import { Component } from '@angular/core';
import { Destino } from '../models/destino';

@Component({
  selector: 'app-cards-destinos',
  standalone: false,
  templateUrl: './cards-destinos.html',
  styleUrl: './cards-destinos.css'
})
export class CardsDestinos {
  destinos: Destino[] = [
    {
      id: 1,
      nome: 'Alemanha',
      descricao: 'Fazer um intercâmbio na Alemanha é investir em uma das economias mais fortes e inovadoras do mundo, com um sistema educacional de ponta e grandes oportunidades para estudantes internacionais.',
      imagem: 'images/alemanha.jpg',
      rota: 'alemanha'
    },
    {
      id: 2,
      nome: 'Japão',
      descricao: 'Com uma mistura fascinante de tradição milenar e tecnologia de ponta, o Japão oferece uma experiência transformadora e uma imersão completa em uma cultura única.',
      imagem: 'images/japao.jpg',
      rota: 'japao'
    },
    {
      id: 3,
      nome: 'Inglaterra',
      descricao: 'A Inglaterra combina excelência no ensino com imersão cultural, sendo ideal para quem busca crescimento pessoal e profissional enquanto aperfeiçoa o inglês.',
      imagem: 'images/inglaterra.jpg',
      rota: 'inglaterra'
    },
    {
      id: 4,
      nome: 'Portugal',
      descricao: 'Portugal oferece ensino de qualidade, cultura rica e custo de vida acessível. É um destino acolhedor e estratégico para quem busca qualidade de vida e aprendizado na Europa.',
      imagem: 'images/portugal.jpg',
      rota: 'portugal'
    }
  ];

}
