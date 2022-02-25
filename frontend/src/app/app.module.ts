import { PokemonService } from './services/pokemon.service';
import { MaterialModule } from './imports/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NavbarComponent } from './layouts/navbar/navbar.component';
import { PokemonFavoriteListComponent } from './components/pokemon-favorite-list/pokemon-favorite-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonItemComponent } from './components/pokemon/pokemon-item/pokemon-item.component';
import { FavPokemonComponent } from './components/pokemon-favorite-list/fav-pokemon/fav-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonItemComponent,
    PokemonFavoriteListComponent,
    NavbarComponent,
    FavPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
