import { Component } from '@angular/core';
import { DestinoLista } from '../models/destinoLista';

@Component({
  selector: 'app-destinos',
  standalone: false,
  templateUrl: './destinos.html',
  styleUrl: './destinos.css'
})
export class Destinos {
  destinos: DestinoLista[] = [
    {
      nome: 'Canadá',
      descricao: 'O Canadá é um destino de destaque para intercâmbio, combinando ensino de excelência, segurança e diversidade cultural.',
      rota: 'canada'
    },
    {
      nome: 'Irlanda',
      descricao: 'Conhecida pela hospitalidade e qualidade de vida, a Irlanda oferece estudo e trabalho durante o intercâmbio.',
      rota: 'irlanda'
    },
    {
      nome: 'Austrália',
      descricao: 'Com praias paradisíacas e ensino de qualidade, a Austrália une estudo, trabalho e lazer.',
      rota: 'australia'
    },
    {
      nome: 'Nova Zelândia',
      descricao: 'Natureza exuberante, segurança e excelente educação fazem da Nova Zelândia um destino único.',
      rota: 'nova-zelandia'
    },
    {
      nome: 'Estados Unidos',
      descricao: 'Universidades renomadas e diversidade cultural tornam os EUA perfeitos para desenvolvimento acadêmico.',
      rota: 'estados-unidos'
    },
    {
      nome: 'Reino Unido',
      descricao: 'Tradição, universidades históricas e o inglês britânico fazem do Reino Unido uma escolha excepcional.',
      rota: 'reino-unido'
    }
  ];

  destinosCarousel = [
    {
      nome: 'Espanha',
      descricao: 'Explore a cultura vibrante espanhola, entre festas, gastronomia e história fascinante.',
      imagem: 'images/espanha.jpg',
      rota: 'espanha'
    },
    {
      nome: 'Itália',
      descricao: 'Descubra a arte, gastronomia e paisagens únicas da Itália — um destino inesquecível.',
      imagem: 'images/italia.jpg',
      rota: 'italia'
    },
    {
      nome: 'México',
      descricao: 'Vivencie tradições milenares e uma cultura cheia de cores, sabores e histórias únicas.',
      imagem: 'images/mexico.jpg',
      rota: 'mexico'
    }
  ];

}
