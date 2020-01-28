import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimerComponent } from './components/primer/primer.component';
import { TerceroComponent } from './components/tercero/tercero.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { BrazoComponent } from './components/brazo/brazo.component';
import { PieComponent } from './components/pie/pie.component';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './services/pokemon.service';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    TerceroComponent,
    CuerpoComponent,
    BrazoComponent,
    PieComponent,
    PokemonComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
