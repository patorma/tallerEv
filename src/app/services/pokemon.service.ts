import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon() {
    return this.http.get('https://ng-pokedex.firebaseapp.com/api/pokemon.json');
  }

}
