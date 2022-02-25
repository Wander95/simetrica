import { PokemonFavoriteListComponent } from './components/pokemon-favorite-list/pokemon-favorite-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PokemonComponent},
  { path: 'favorites', component: PokemonFavoriteListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
