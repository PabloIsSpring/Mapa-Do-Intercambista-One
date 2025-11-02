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
    // Pega a lista de clientes cadastrados
    const clientes: Cliente[] = this.storageService.getLocalStorage('clientes') || [];

    // Procura o cliente que corresponde ao email e senha
    const cliente = clientes.find(c => c.email === this.email && c.senha === this.senha);

    if (!cliente) {
      alert('Email ou senha incorretos ou usuário não cadastrado.');
      return;
    }

    // Login bem-sucedido
    alert(`Bem-vindo, ${cliente.primeiroNome}!`);

    // Marca que o usuário está logado
    this.storageService.setLocalStorage('usuarioLogado', true);

    // Salva o cliente logado separadamente para o menu superior
    this.storageService.setLocalStorage('cliente', cliente);

    // Navega para a home
    this.router.navigate(['/home']);
  }
}
