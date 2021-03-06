import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  lista = [];
  

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe(res => {
  
      console.log(res);
      this.lista = res.results;
      
      
      if (res.next) {
        this.lista.push({ name: 'HAY MAS' });
      }
    }, err => {
      console.log(err);
    });
  }

  seleccionar(x: { seleccionado: boolean; }) {
    // event.preventDefault();
    x.seleccionado = !x.seleccionado;
    
   }

}
