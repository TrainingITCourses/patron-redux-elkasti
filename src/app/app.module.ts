import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanzamientosComponent } from './lanzamientos/lanzamientos.component';
import { ListaComponent } from './lista/lista.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LanzamientosComponent,
    ListaComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
