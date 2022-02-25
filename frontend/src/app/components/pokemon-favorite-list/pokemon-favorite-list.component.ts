import { IFavorito } from './../../interfaces/favorito.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pokemon-favorite-list',
  templateUrl: './pokemon-favorite-list.component.html',
  styleUrls: ['./pokemon-favorite-list.component.css']
})

export class PokemonFavoriteListComponent implements OnInit {
  favoritePokemon?: IFavorito[]
  constructor() { }

  ngOnInit(): void {
    const favPokemons =  localStorage.getItem('favoritePokemons')
    if(favPokemons){
      this.favoritePokemon = JSON.parse(favPokemons);
    }
  }

}
