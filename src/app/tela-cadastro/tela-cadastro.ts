import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { StorageService } from '../services/local-storage-services';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-tela-cadastro',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './tela-cadastro.html',
  styleUrls: ['./tela-cadastro.css']
})
export class TelaCadastro {

  cliente: Cliente = {
    primeiroNome: '',
    sobrenome: '',
    email: '',
    senha: ''
  };

  confirmarSenha: string = '';

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  cadastrar() {
    if (!this.cliente.email || !this.cliente.senha || this.cliente.senha !== this.confirmarSenha) {
      alert('Por favor, preencha os campos corretamente e confirme a senha.');
      return;
    }

    this.storageService.setSessionStorage('cliente', this.cliente);
    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/tela-login']);
  }
}
