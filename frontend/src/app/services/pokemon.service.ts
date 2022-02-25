import { IResponse, IPokemonResponse, IPokemon } from './../interfaces/pokemon.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
    ) { }

  getPokemons(pages: number, limit: number):Observable<IResponse>{
    const offset = pages * limit;
    this.route.queryParams.subscribe((params)=>{console.log('params', params)})
    return this.http.get<IResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
  }

  getOnePokemon(pokemonId: number):Observable<IPokemon>{
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  }

  getOnePokemonByUrl(pokemonUrl: string):Observable<IPokemon>{
    return this.http.get<IPokemon>(pokemonUrl)
  }
}
