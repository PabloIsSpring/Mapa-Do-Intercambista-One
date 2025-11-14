import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-resetar-senha',
  standalone: false,
  templateUrl: './tela-resetar-senha.html',
  styleUrls: ['./tela-resetar-senha.css']
})
export class TelaResetarSenha implements OnInit {

  novaSenha: string = '';
  confirmacao: string = '';
  carregando: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  async ngOnInit() {
    this.carregando = true;

    // Aguarda o Supabase processar sessão vindas do link
    while (this.authService.isCarregandoSessao()) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    this.carregando = false;
  }

  async redefinirSenha() {
    if (this.novaSenha !== this.confirmacao) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      await this.authService.updatePassword(this.novaSenha);
      alert('Senha redefinida com sucesso! Faça login novamente.');
      this.authService.desativarModoRecuperacao();
      this.router.navigate(['/tela-login']);
    } catch (err: any) {
      console.error(err);
      alert('Erro ao redefinir senha: ' + err.message);
    }
  }

}
