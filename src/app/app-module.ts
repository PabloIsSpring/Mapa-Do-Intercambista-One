import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbCarouselModule, NgbCollapse, NgbModule, NgbNav, NgbNavConfig, NgbNavItem, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuSuperior } from './menu-superior/menu-superior';
import { Foruns } from './foruns/foruns';
import { Destinos } from './destinos/destinos';
import { Agencias } from './agencias/agencias';
import { TelaCadastro } from './tela-cadastro/tela-cadastro';
import { TelaLogin } from './tela-login/tela-login';
import { PacoteDetalhe } from './pacote-detalhe/pacote-detalhe';
import { Home } from './home/home';
import { Rodape } from './rodape/rodape';
import { CardsDestinos } from './cards-destinos/cards-destinos';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AgenciaDetalhes } from './agencia-detalhes/agencia-detalhes';
import { ActivatedRoute } from '@angular/router';
import { StarRating } from './star-rating/star-rating';
import { NgClass } from '@angular/common';
import { ForumAgencia } from './forum-agencia/forum-agencia';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
    Foruns,
    Destinos,
    Agencias,
    PacoteDetalhe,
    Home,
    Rodape,
    CardsDestinos,
    AgenciaDetalhes,
    StarRating,
    ForumAgencia
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    NgbCollapse,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
