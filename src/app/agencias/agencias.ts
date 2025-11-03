import { Component } from '@angular/core';
import { Agencia } from '../models/agencia';

@Component({
  selector: 'app-agencias',
  standalone: false,
  templateUrl: './agencias.html',
  styleUrl: './agencias.css'
})
export class Agencias {

  agencias: Agencia [] = [
    {id: 1, nome:'Intercâmbio STV', descricao:'sla oq sla oq intercannabis', foto:'images/agencia1.png', destinos: ['Japão', 'Estados Unidos', 'Canadá'] },
    {id: 2, nome:'IE Intercâmbio', descricao:'Nao sei oq falar', foto:'images/agencia2.png', destinos:['Canadá', 'Espanha']},
    {id: 3, nome:'CI Intercâmbio', descricao:'CI do', foto:'images/agencia3.png', destinos:['Estados Unidos', 'Alemanha', 'Itália']},
    {id: 4, nome:'Egali Intercâmbio', descricao:'Egaa li', foto:'images/agencia4.png', destinos:['França', 'Polônia']}
  ]
  
}
