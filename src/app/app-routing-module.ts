import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuSuperior } from './menu-superior/menu-superior';
import { Agencias } from './agencias/agencias';
import { Destinos } from './destinos/destinos';
import { Foruns } from './foruns/foruns';
import { TelaCadastro } from './tela-cadastro/tela-cadastro';
import { TelaLogin } from './tela-login/tela-login';
import { PacoteDetalhe } from './pacote-detalhe/pacote-detalhe';
import { Home } from './home/home';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: Home},
  { path: 'menu-superior', component: MenuSuperior},
  { path: 'agencias', component: Agencias},
  { path: 'destinos', component: Destinos},
  { path: 'foruns', component: Foruns},
  { path: 'tela-login', component: TelaLogin},
  { path: 'pacotes/:pais', component: PacoteDetalhe},
  { path: 'tela-cadastro', component: TelaCadastro}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
