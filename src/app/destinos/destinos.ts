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
      descricao: 'O Canadá é um destino de destaque para intercâmbio, combinando ensino de excelência, segurança e diversidade cultural. Ideal para quem deseja aprender inglês ou francês e viver uma experiência multicultural.',
      rota: 'canada'
    },
    {
      nome: 'Irlanda',
      descricao: 'Conhecida pela hospitalidade e qualidade de vida, a Irlanda oferece a oportunidade de estudar e trabalhar durante o intercâmbio. O destino ideal para quem busca aprimorar o inglês e vivenciar tradições europeias.',
      rota: 'irlanda'
    },
    {
      nome: 'Austrália',
      descricao: 'Com praias paradisíacas e instituições de ensino reconhecidas, a Austrália é um destino que une estudo, trabalho e lazer em um ambiente acolhedor e multicultural.',
      rota: 'australia'
    },
    {
      nome: 'Nova Zelândia',
      descricao: 'A Nova Zelândia encanta pela segurança, natureza exuberante e excelente sistema educacional. Um destino perfeito para quem busca tranquilidade, aprendizado e novas experiências.',
      rota: 'nova-zelandia'
    },
    {
      nome: 'Estados Unidos',
      descricao: 'Com universidades renomadas e cultura vibrante, os Estados Unidos são o destino ideal para quem deseja se desenvolver academicamente e ampliar suas oportunidades no mercado internacional.',
      rota: 'estados-unidos'
    },
    {
      nome: 'Reino Unido',
      descricao: 'O Reino Unido é sinônimo de tradição e excelência acadêmica. Fazer intercâmbio aqui é mergulhar em uma cultura rica, com universidades históricas e aprendizado do inglês em seu berço original.',
      rota: 'reino-unido'
    }
  ];
}
