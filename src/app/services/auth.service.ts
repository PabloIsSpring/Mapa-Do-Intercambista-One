import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { supabase } from '../supabase-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clienteSubject = new BehaviorSubject<any>(null);
  cliente$ = this.clienteSubject.asObservable();

  private carregandoSessao = true; // 🔹 Flag para controlar o estado inicial

  constructor() {
    this.initAuthListener();
  }

  private async initAuthListener() {
    // Evita exibir usuário antes de checar a sessão
    this.carregandoSessao = true;

    const { data } = await supabase.auth.getUser();
    if (data?.user) {
      this.clienteSubject.next(data.user);
    }

    // Escuta alterações de autenticação
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        this.clienteSubject.next(session.user);
      } else {
        this.clienteSubject.next(null);
      }
    });

    this.carregandoSessao = false;
  }

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(this.tratarErro(error.message));
    this.clienteSubject.next(data.user);
    return data;
  }

  async signUp(email: string, password: string, primeiroNome: string, sobrenome: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { primeiroNome, sobrenome } }
    });
    if (error) throw new Error(this.tratarErro(error.message));
    this.clienteSubject.next(data.user);
    return data;
  }

  async signOut() {
    await supabase.auth.signOut();
    this.clienteSubject.next(null);
  }

  async resetPassword(email: string) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:4200/tela-resetar-senha'
    });
    if (error) throw error;
    return data;
  }

  async updatePassword(novaSenha: string) {
    const { data, error } = await supabase.auth.updateUser({ password: novaSenha });
    if (error) throw error;
    return data;
  }

  private tratarErro(mensagem: string): string {
    if (mensagem.includes('Invalid login credentials')) return 'E-mail ou senha incorretos.';
    if (mensagem.includes('User already registered')) return 'Este e-mail já está cadastrado.';
    if (mensagem.includes('Email not confirmed')) return 'Por favor, confirme seu e-mail antes de fazer login.';
    if (mensagem.includes('weak password')) return 'A senha deve ter pelo menos 6 caracteres.';
    return 'Ocorreu um erro inesperado. Tente novamente.';
  }

  // 🔹 Permite saber se o app ainda está verificando a sessão
  isCarregandoSessao() {
    return this.carregandoSessao;
  }
}
