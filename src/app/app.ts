import { Component, signal } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Mapa-Do-Intercambista');

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    const url = window.location.href;

    if (url.includes("type=recovery")) {
      this.auth.setModoRecuperacao(true);
    } else {
      this.auth.setModoRecuperacao(false);
    }
  }
}



