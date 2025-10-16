import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuSuperior } from './menu-superior/menu-superior';
import { Foruns } from './foruns/foruns';
import { Destinos } from './destinos/destinos';
import { Agencias } from './agencias/agencias';
import { TelaCadastro } from './tela-cadastro/tela-cadastro';
import { TelaLogin } from './tela-login/tela-login';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
    Foruns,
    Destinos,
    Agencias,
    TelaCadastro,
    TelaLogin
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
