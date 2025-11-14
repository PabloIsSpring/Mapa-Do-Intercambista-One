import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { supabase } from '../supabase-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clienteSubject = new BehaviorSubject<any>(null);
  cliente$ = this.clienteSubject.asObservable();

  private carregandoSessao = true;
  private modoRecuperacao = false;

  constructor() {
    this.initAuthListener();
  }

  // ============================================================
  // 🔹 Inicialização do Listener de Autenticação
  // ============================================================
  private async initAuthListener() {
    this.carregandoSessao = true;

    // 🔸 Escuta mudanças de sessão (login, logout, recuperação, etc.)
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        this.clienteSubject.next(session.user);
      } else {
        this.clienteSubject.next(null);
      }
      this.carregandoSessao = false;
    });

    // 🔸 Verifica sessão inicial manualmente
    const { data } = await supabase.auth.getUser();

    if (data?.user) {
      this.clienteSubject.next(data.user);
    } else {
      // 🔸 Garantia extra: tenta recuperar sessão completa
      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData?.session?.user) {
        this.clienteSubject.next(sessionData.session.user);
      }
    }

    // 🔸 Timeout de segurança
    setTimeout(() => {
      this.carregandoSessao = false;
    }, 300);
  }

  // ============================================================
  // 🔹 Controle do modo de recuperação
  // ============================================================
  setModoRecuperacao(valor: boolean) {
    this.modoRecuperacao = valor;
  }

  ativarModoRecuperacao() {
    this.modoRecuperacao = true;
  }

  desativarModoRecuperacao() {
    this.modoRecuperacao = false;
  }

  isModoRecuperacao() {
    return this.modoRecuperacao;
  }

  // ============================================================
  // 🔹 Login
  // ============================================================
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(this.tratarErro(error.message));

    // 🔹 Aguarda a sessão final ser realmente carregada pelo Supabase
    const { data: userData } = await supabase.auth.getUser();

    // 🔹 Atualiza o BehaviorSubject com o usuário real e atualizado
    this.clienteSubject.next(userData?.user || data.user);

    return data;
  }


  // ============================================================
  // 🔹 Cadastro
  // ============================================================
  async signUp(email: string, password: string, primeiroNome: string, sobrenome: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { primeiroNome, sobrenome }
      }
    });

    if (error) throw new Error(this.tratarErro(error.message));

    this.clienteSubject.next(data.user);
    return data;
  }

  // ============================================================
  // 🔹 Logout
  // ============================================================
  async signOut() {
    await supabase.auth.signOut();
    this.clienteSubject.next(null);
  }

  // ============================================================
  // 🔹 Enviar e-mail para resetar senha
  // ============================================================
  async resetPassword(email: string) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:4200/tela-resetar-senha'
    });
    if (error) throw error;
    return data;
  }

  // ============================================================
  // 🔹 Atualizar senha (após o usuário abrir o link)
  // ============================================================
  async updatePassword(novaSenha: string) {
    const { data, error } = await supabase.auth.updateUser({
      password: novaSenha
    });

    if (error) throw error;

    // 🔸 Garantia: pega sessão atualizada
    const { data: sessionData } = await supabase.auth.getSession();

    // 🔸 Atualiza BehaviorSubject para atualizar menu superior
    this.clienteSubject.next(sessionData?.session?.user ?? null);

    return data;
  }

  // ============================================================
  // 🔹 Tratamento de erros
  // ============================================================
  private tratarErro(mensagem: string): string {
    if (mensagem.includes('Invalid login credentials')) return 'E-mail ou senha incorretos.';
    if (mensagem.includes('User already registered')) return 'Este e-mail já está cadastrado.';
    if (mensagem.includes('Email not confirmed')) return 'Por favor, confirme seu e-mail antes de fazer login.';
    if (mensagem.includes('weak password')) return 'A senha deve ter pelo menos 6 caracteres.';
    return 'Ocorreu um erro inesperado. Tente novamente.';
  }

  // ============================================================
  // 🔹 Saber se o app ainda está carregando sessão
  // ============================================================
  isCarregandoSessao() {
    return this.carregandoSessao;
  }
}
