import { Component, Input } from '@angular/core';
import { Pokemonsinterface } from '../pokemonsinterface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  imports: [RouterModule],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
})
export class Pokemons {
  @Input() pokemons!: Pokemonsinterface;
}