import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';

const routes: Routes = [
  { path: 'pokemon', component: PokemonComponent },
  { path: 'cuerpo', component: CuerpoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// CREADO A Mano arriba
