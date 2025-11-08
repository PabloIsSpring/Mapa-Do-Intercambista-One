import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tela-esqueci-senha',
  standalone: false,
  templateUrl: './tela-esqueci-senha.html',
  styleUrls: ['./tela-esqueci-senha.css']
})
export class TelaEsqueciSenha {
  email: string = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // chamado pelo HTML (ENVIAR LINK)
  async enviarLink(): Promise<void> {
    if (!this.email || !this.email.includes('@')) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    this.loading = true;
    try {
      await this.authService.resetPassword(this.email);
      alert('Um link de redefinição de senha foi enviado para o seu e-mail. Verifique a caixa de entrada e a pasta de spam.');
      // opcional: redirecionar ao login após enviar
      this.router.navigate(['/tela-login']);
    } catch (err: any) {
      console.error('Erro reset password:', err);
      const msg = err?.message ? this.getMensagemErro(err.message) : 'Ocorreu um erro inesperado.';
      alert('Erro ao enviar e-mail: ' + msg);
    } finally {
      this.loading = false;
    }
  }

  // chamado pelo HTML (Voltar ao login)
  redirecionarLogin(): void {
    this.router.navigate(['/tela-login']);
  }

  // helper para mapear mensagens técnicas em algo amigável
  private getMensagemErro(mensagem: string): string {
    const m = mensagem.toLowerCase();
    if (m.includes('user not found') || m.includes('no user')) return 'E-mail não encontrado.';
    if (m.includes('invalid email') || m.includes('invalid_request')) return 'E-mail inválido.';
    if (m.includes('rate limit')) return 'Muitos pedidos. Tente novamente em alguns minutos.';
    if (m.includes('network') || m.includes('timeout')) return 'Erro de conexão. Verifique sua internet e tente novamente.';
    return 'Ocorreu um erro inesperado.';
  }
}