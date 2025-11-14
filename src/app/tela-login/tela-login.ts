import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async login() {
    if (!this.email || !this.senha) {
      alert('Por favor, preencha email e senha.');
      return;
    }

    this.loading = true;
    try {
      const { user } = await this.authService.signIn(this.email, this.senha);
      if (!user) {
        alert('Falha ao autenticar. Verifique suas credenciais.');
        return;
      }

      alert(`Bem-vindo, ${user.user_metadata?.['primeiroNome'] || 'usuário'}!`);
      this.authService.desativarModoRecuperacao();

      // navega para a home
      await this.router.navigate(['/home']);

      // força recarregar a página
      setTimeout(() => {
        window.location.reload();
      }, 50);

    } catch (err: any) {
      console.error(err);
      alert('Erro ao fazer login: ' + err.message);
    } finally {
      this.loading = false;
    }
  }

  redirecionar(): void {
    this.router.navigate(['/tela-cadastro']);

  }

  redirecionarEsqueciSenha(): void {
    this.router.navigate(['/tela-esqueci-senha']);
  }

}
