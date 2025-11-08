import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { supabase } from '../supabase-client';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private clienteSubject = new BehaviorSubject<any>(null);
    cliente$ = this.clienteSubject.asObservable();

    constructor() {
        // Verifica sessão atual
        this.loadUser();

        // Escuta mudanças de autenticação (login/logout)
        supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                this.clienteSubject.next(session.user);
            } else {
                this.clienteSubject.next(null);
            }
        });
    }

    async loadUser() {
        const { data } = await supabase.auth.getUser();
        if (data?.user) {
            this.clienteSubject.next(data.user);
        }
    }

    async signIn(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        this.clienteSubject.next(data.user);
        return data;
    }

    async signUp(email: string, password: string, primeiroNome: string, sobrenome: string) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { primeiroNome, sobrenome } }
        });
        if (error) throw error;
        this.clienteSubject.next(data.user);
        return data;
    }

    async signOut() {
        await supabase.auth.signOut();
        this.clienteSubject.next(null);
    }
}
