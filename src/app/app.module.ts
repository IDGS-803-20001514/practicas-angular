import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinepolisModule } from './cinepolis/cinepolis.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PuntosModule } from './puntos/puntos.module';
import { ModuloResitenciasModule } from './modulo-resitencias/modulo-resitencias.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CinepolisModule,
    PuntosModule,
    ModuloResitenciasModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
