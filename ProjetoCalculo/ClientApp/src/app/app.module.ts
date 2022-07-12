import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BascarComponent } from './bascar/bascar.component';
import { BasicoComponent } from './basico/basico.component';
import { Baisco2Component } from './baisco2/baisco2.component';
import { Basico3Component } from './basico3/basico3.component';
import { LitarCalculosComponent } from './litar-calculos/litar-calculos.component';
import { AreasComponent } from './areas/areas.component';
import { LoginComponent } from './login/login.component';
import { AgradecimentoComponent } from './agradecimento/agradecimento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BascarComponent,
    BasicoComponent,
    Baisco2Component,
    Basico3Component,
    LitarCalculosComponent,
    AreasComponent,
    LoginComponent,
    AgradecimentoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'bascar', component: BascarComponent, pathMatch: 'full' },
        { path: 'basico', component: BasicoComponent, pathMatch: 'full' },
        { path: 'basico2', component: Baisco2Component, pathMatch: 'full' },
        { path: 'basico3', component: Basico3Component, pathMatch: 'full' },
        { path: 'listarcalculo', component: LitarCalculosComponent, pathMatch: 'full' },
        { path: 'areas', component: AreasComponent, pathMatch: 'full' },
        { path: 'login', component: LoginComponent, pathMatch: 'full' },
        { path: 'agradecimento', component: AgradecimentoComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
