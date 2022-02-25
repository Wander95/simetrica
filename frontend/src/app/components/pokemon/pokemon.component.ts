import { PageEvent } from '@angular/material/paginator';
import { IPokemonResponse } from '../../interfaces/pokemon.interface';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: IPokemonResponse[] = [];
  limit: number = 20;
  count: number = 0;
  page: number = 0;



  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons(this.page,this.limit).subscribe(
      (res) =>{
        console.log('res', res)
        this.pokemons = res.results
        this.count = res.count
      },
      (err)=>{
        console.log('err', err)
      }
    )
  }

  onPageEvent(event:PageEvent){
    this.pokemonService.getPokemons(event.pageIndex,event.pageSize).subscribe(
      (res) => {
        console.log('res', res)
        this.pokemons = res.results
        this.count = res.count
      },
      (err)=>{
        console.log('err', err)
      }
    )

  }



}
