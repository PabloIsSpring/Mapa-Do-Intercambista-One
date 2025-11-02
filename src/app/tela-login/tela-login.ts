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
    const clientes: Cliente[] = this.storageService.getLocalStorage('clientes') || [];

    const cliente = clientes.find(c => c.email === this.email && c.senha === this.senha);

    if (!cliente) {
      alert('Email ou senha incorretos ou usuário não cadastrado.');
      return;
    }

    alert(`Bem-vindo, ${cliente.primeiroNome}!`);

    this.storageService.setLocalStorage('usuarioLogado', true);

    this.storageService.setLocalStorage('cliente', cliente);

    this.router.navigate(['/home']);
  }
}
