import { MatSnackBar } from '@angular/material/snack-bar';
import { IFavorito } from './../../../interfaces/favorito.interface';
import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-fav-pokemon',
  templateUrl: './fav-pokemon.component.html',
  styleUrls: ['./fav-pokemon.component.css']
})
export class FavPokemonComponent implements OnInit {

  @Input() public pokemon: IFavorito = {}
  @Input() public pokeIndex: number = 0;

  pokemons: IFavorito[] = []
  isEditActive:boolean = false;


  aliasFormControl:FormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  matcher = new MyErrorStateMatcher();

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  activateEdit(){
    this.isEditActive = true
  }

  deactivateEdit(){
    this.isEditActive = false
  }

  updatePokemon(){
    const pokemons =  localStorage.getItem('favoritePokemons')
    if(pokemons){
      this.pokemons = JSON.parse(pokemons);
    }

    if(!this.aliasFormControl.errors){
      const updatedList = this.pokemons.map((_pokemon,index)=>{
        if(index === this.pokeIndex){
          return {
            ..._pokemon,
            alias: this.aliasFormControl.value
          }
        }else{
          return _pokemon
        }
      })

      this.deactivateEdit()
      this.pokemon.alias = this.aliasFormControl.value
      localStorage.setItem('favoritePokemons',JSON.stringify(updatedList))
      this._snackBar.open('Pokemon updated','close')
    }else{
      this._snackBar.open('Error: Pokemon not updated. Alias required','close')
    }




  }

  deletePokemon(){
    const pokemons =  localStorage.getItem('favoritePokemons')
    if(pokemons){
      this.pokemons = JSON.parse(pokemons);
    }

    const deletedList = this.pokemons.filter((_pokemon,index)=>{
      return index !== this.pokeIndex
    })

    this.pokemon.alias = this.aliasFormControl.value
    localStorage.setItem('favoritePokemons',JSON.stringify(deletedList))

    this._snackBar.open('Pokemon deleted from favorite','close')

  }
}
