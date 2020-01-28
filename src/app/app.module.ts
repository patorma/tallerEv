import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimerComponent } from './components/primer/primer.component';
import { TerceroComponent } from './components/tercero/tercero.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { BrazoComponent } from './components/brazo/brazo.component';
import { PieComponent } from './components/pie/pie.component';
import { FormsModule} from '@angular/forms';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    TerceroComponent,
    CuerpoComponent,
    BrazoComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
