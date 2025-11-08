import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service'; // novo import
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
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async cadastrar() {
    if (!this.cliente.email || !this.cliente.senha || this.cliente.senha !== this.confirmarSenha) {
      alert('Por favor, preencha os campos corretamente e confirme a senha.');
      return;
    }

    this.loading = true;
    try {
      const data = await this.authService.signUp(
        this.cliente.email,
        this.cliente.senha,
        this.cliente.primeiroNome,
        this.cliente.sobrenome
      );

      alert('Cadastro realizado com sucesso! Verifique seu e-mail para confirmar a conta.');
      this.router.navigate(['/home']);
    } catch (err: any) {
      console.error(err);
      alert('Erro ao cadastrar: ' + err.message);
    } finally {
      this.loading = false;
    }
  }
}
