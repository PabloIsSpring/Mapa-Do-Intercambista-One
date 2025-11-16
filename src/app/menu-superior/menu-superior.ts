import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
  busca: string = "";
  resultados: any[] = [];

  agencias = [
    { id: 1, nome: "Explore Abroad", tipo: "agencia" },
    { id: 2, nome: "Journey Hub", tipo: "agencia" },
    { id: 3, nome: 'Gateway Exchange', tipo: "agencia" },
  ];


  destinos = [
    { nome: "Canadá", rota: "canada", tipo: "destino" },
    { nome: "Inglaterra", rota: "inglaterra", tipo: "destino" },
    { nome: "Irlanda", rota: "irlanda", tipo: "destino" },
    { nome: "Austrália", rota: "australia", tipo: "destino" },
    { nome: "Nova Zelândia", rota: "nova-zelandia", tipo: "destino" },
    { nome: "Estados Unidos", rota: "estados-unidos", tipo: "destino" },
    { nome: "Reino Unido", rota: "reino-unido", tipo: "destino" },
    { nome: "Espanha", rota: "espanha", tipo: "destino" },
    { nome: "Itália", rota: "italia", tipo: "destino" },
    { nome: "México", rota: "mexico", tipo: "destino" }
  ];



  constructor(public authService: AuthService, private router: Router) { }

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

  buscaAberta: boolean = false;

  toggleBusca() {
    this.buscaAberta = !this.buscaAberta;

    if (!this.buscaAberta) {
      this.busca = "";
      this.resultados = [];
    }
  }

  fecharBusca() {
    setTimeout(() => {
      this.buscaAberta = false;
      this.busca = "";
      this.resultados = [];
    }, 150);
  }


  get modoRecuperacao() {
    return this.authService.isModoRecuperacao();
  }

  async logout() {
    await this.authService.signOut();
    this.menuAberto = false;
  }

  filtrarResultados() {
    const termo = this.busca.toLowerCase().trim();

    if (termo === "") {
      this.resultados = [];
      return;
    }

    const agFiltradas = this.agencias.filter(a =>
      a.nome.toLowerCase().includes(termo)
    );

    const destFiltrados = this.destinos.filter(d =>
      d.nome.toLowerCase().includes(termo)
    );

    this.resultados = [...agFiltradas, ...destFiltrados];
  }

  navegar(item: any) {
    if (item.tipo === "destino") {
      this.router.navigate(['/pacotes', item.rota]).then(() => {
        window.location.reload();
      });
    }

    if (item.tipo === "agencia") {
      this.router.navigate(['/agencia-detalhes', item.id]).then(() => {
        window.location.reload();
      });
    }

    this.busca = "";
    this.resultados = [];
  }


}
