import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agencia } from '../models/agencia';

@Component({
  selector: 'app-agencia-detalhes',
  standalone: false,
  templateUrl: './agencia-detalhes.html',
  styleUrl: './agencia-detalhes.css'
})
export class AgenciaDetalhes implements OnInit {

  agencia: Agencia = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.agencia.id = this.route.snapshot.params['id'] ?? 0;

      for(let i: number = 0; i < this.agencias.length; i++){
        if(this.agencia.id == this.agencias[i].id) {
          this.agencia = this.agencias[i];
        }
      }
  }

  agencias: Agencia [] = [
    {
      id: 1, 
      nome:'Explore Abroad', 
      descricao:'A cultura do STB é voltada à inovação e diversidade de experiências internacionais. A agência valoriza o crescimento pessoal e profissional dos estudantes, incentivando o aprendizado por meio de vivências culturais. É conhecida por um ambiente profissional moderno, colaborativo e centrado no cliente, com foco em oferecer soluções educacionais de qualidade.', 
      foto:'images/agencia1.png', 
      destinos: ['images/japao.jpg', 'images/espanha.jpg', 'images/canada.jpg'],
      pacotes: ['Japão', 'Espanha', 'Canada']
    },
    {
      id: 2, 
      nome:'Journey Hub', 
      descricao:'A IE tem uma cultura dinâmica e acolhedora, com forte ênfase no atendimento personalizado. Preza por proximidade com o cliente e por criar planos de intercâmbio sob medida. A empresa valoriza o espírito jovem e aventureiro, estimulando seus colaboradores e estudantes a buscar novas experiências e ampliar horizontes culturais.', 
      foto:'images/agencia2.png', 
      destinos:['images/canada.jpg', 'images/espanha.jpg', 'images/mexico.jpg'],
      pacotes: ['Canada', 'Espanha', 'Mexico']
    },
    {
      id: 3, 
      nome:'Gateway Exchange', 
      descricao:'A CI possui uma cultura baseada em inovação, confiança e entusiasmo por viagens. Estimula o desenvolvimento pessoal por meio de experiências internacionais transformadoras. Sua equipe tem perfil empreendedor e comunicativo, sempre buscando soluções criativas para tornar o intercâmbio acessível e inspirador.', 
      foto:'images/agencia3.png', 
      destinos:['images/eua.jpg', 'images/alemanha.jpg', 'images/italia.jpg'],
      pacotes: ['Eua', 'Alemanha', 'Italia']
    },
    {
      id: 4, 
      nome:'Future Exploring', 
      descricao:'A cultura do STB é voltada à inovação e diversidade de experiências internacionais. A agência valoriza o crescimento pessoal e profissional dos estudantes, incentivando o aprendizado por meio de vivências culturais. É conhecida por um ambiente profissional moderno, colaborativo e centrado no cliente, com foco em oferecer soluções educacionais de qualidade.', 
      foto:'images/agencia4.jpg', 
      destinos:['images/portugal.jpg', 'images/inglaterra.jpg'],
      pacotes: ['Portugal', 'Inglaterra']
    }
  ]
}
