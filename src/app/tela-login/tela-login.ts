import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../services/local-storage-services';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tela-login.html',
  styleUrls: ['./tela-login.css']
})
export class TelaLogin {

  email: string = '';
  senha: string = '';

  constructor(private storageService: StorageService, private router: Router) { }

  login() {
    const cliente: Cliente = this.storageService.getSessionStorage('cliente');

    if (!cliente) {
      alert('Nenhum usuário encontrado. Faça o cadastro primeiro.');
      return;
    }

    if (cliente.email === this.email && cliente.senha === this.senha) {
      alert(`Bem-vindo, ${cliente.primeiroNome}!`);
      this.router.navigate(['/home']);
    } else {
      alert('Email ou senha incorretos.');
    }
  }
}
