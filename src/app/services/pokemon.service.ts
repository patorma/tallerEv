import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<any> {
    // return this.http.get('https://ng-pokedex.firebaseapp.com/api/pokemon.json');
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }

}
