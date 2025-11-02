import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/local-storage-services';

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

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    const cliente = this.storageService.getLocalStorage('cliente');
    this.atualizarCliente(cliente);

    this.storageService.loginStatus$.subscribe(cliente => {
      this.atualizarCliente(cliente);
    });
  }

  atualizarCliente(cliente: any) {
    if (cliente) {
      this.clienteLogado = true;
      this.nomeCliente = cliente.primeiroNome || '';
    } else {
      this.clienteLogado = false;
      this.nomeCliente = '';
    }
  }

  logout() {
    this.storageService.removeLocalStorage('cliente');
    this.menuAberto = false;
  }
}
