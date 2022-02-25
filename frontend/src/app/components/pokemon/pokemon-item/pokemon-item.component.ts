import { PokemonService } from '../../../services/pokemon.service';
import { IPokemon, IPokemonResponse } from '../../../interfaces/pokemon.interface';
import { Component, Input, OnInit } from '@angular/core';
import { IFavorito } from '../../../interfaces/favorito.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  aliasFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  matcher = new MyErrorStateMatcher();

  pokemon?: IPokemon

  @Input() public pokemonUrl: string = ''
  @Input() public pokemonName?: string;
  @Input() public favoritePokemon?: IFavorito

  constructor(
    private pokemonService: PokemonService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.pokemonService.getOnePokemonByUrl(this.pokemonUrl)
    .subscribe((res)=>{
      this.pokemon = res
      console.log('res', this.pokemon.sprites.other.home.front_default)
    })

  }

  addToFavorite(message?: string, action?: string){

    console.log('message', this.aliasFormControl.value)

    const _pokemons =  localStorage.getItem('favoritePokemons')
    if(!this.aliasFormControl.errors){

      if(_pokemons){
        const jsonData = JSON.stringify(
        [
          ...JSON.parse(_pokemons),
          {
          name: this.pokemon?.name,
          alias: this.aliasFormControl.value,
          imageUrl: this.pokemon?.sprites.other.home.front_default,
          createdAt: 'Date',
        }]);

        localStorage.setItem("favoritePokemons",jsonData)
        this._snackBar.open('Pokemon added to favorite','close')
      }else{
        const jsonData = JSON.stringify([{
          name: this.pokemon?.name,
          alias: this.aliasFormControl.value,
          imageUrl: this.pokemon?.sprites.other.home.front_default,
          createdAt: 'Date',
        }]);

        localStorage.setItem("favoritePokemons",jsonData)

        this._snackBar.open('Pokemon added to favorite','close')
      }

    }else{
      this._snackBar.open('Alias field required','close', {
        duration: 3000
      })
    }
  }

}
