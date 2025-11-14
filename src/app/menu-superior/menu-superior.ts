import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu-superior',
  standalone: false,
  templateUrl: './menu-superior.html',
  styleUrls: ['./menu-superior.css']
})
export class MenuSuperior implements OnInit {
  clienteLogado: boolean = false;
  nomeCliente: string = '';
  menuAberto: boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isModoRecuperacao()) {
      this.clienteLogado = false;
      return; // 🔥 nem inicia o listener, nunca vai aparecer usuário
    }

    this.authService.cliente$.subscribe(user => {
      if (user) {
        this.clienteLogado = true;
        this.nomeCliente = user.user_metadata?.['primeiroNome'] || 'usuário';
      } else {
        this.clienteLogado = false;
        this.nomeCliente = '';
      }
    });
  }

  get modoRecuperacao() {
    return this.authService.isModoRecuperacao();
  }

  async logout() {
    await this.authService.signOut();
    this.menuAberto = false;
  }
}
