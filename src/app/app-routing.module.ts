import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { DetallePokemonComponent } from './components/detalle-pokemon/detalle-pokemon.component';

const routes: Routes = [
  { path: '',pathMatch:'full',redirectTo: '/' },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'cuerpo', component: CuerpoComponent },
  {path: 'detallepokemon/:id', component: CuerpoComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// CREADO A Mano arriba
