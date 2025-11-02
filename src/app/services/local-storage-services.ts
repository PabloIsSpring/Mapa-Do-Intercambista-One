import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private loginStatus = new BehaviorSubject<Cliente | null>(null);
  loginStatus$ = this.loginStatus.asObservable();

  constructor() {
    const clienteLogado = this.getLocalStorage('cliente');
    if (clienteLogado) {
      this.loginStatus.next(clienteLogado);
    }
  }

  setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));

    if (key === 'cliente') {
      this.loginStatus.next(value);
    }
  }

  getLocalStorage(key: string): any | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeLocalStorage(key: string) {
    localStorage.removeItem(key);

    if (key === 'cliente') {
      this.loginStatus.next(null);
    }
  }
}
