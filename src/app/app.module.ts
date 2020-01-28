import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimerComponent } from './components/primer/primer.component';
import { TerceroComponent } from './components/tercero/tercero.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    TerceroComponent // agregado (arriba el import igual)
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
