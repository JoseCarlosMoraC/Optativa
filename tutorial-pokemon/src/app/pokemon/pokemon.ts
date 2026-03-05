import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Pokemonsinterface } from '../pokemonsinterface';
import { CommonModule } from '@angular/common';
import { Pokemons } from '../pokemons/pokemons';
import { Pokemonservice } from '../pokemonservice';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule, Pokemons, RouterModule],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon implements OnInit {
  pokemonslista: Pokemonsinterface[] = [];
  pokemonservice: Pokemonservice = inject(Pokemonservice);
  filteredpokemonslista: Pokemonsinterface[] = [];
  private cdr = inject(ChangeDetectorRef);

  constructor() {}

  ngOnInit(): void {
    this.pokemonservice.getallpokemons()
      .then((datos: Pokemonsinterface[]) => {
        this.pokemonslista = datos;
        this.filteredpokemonslista = datos;
        this.cdr.detectChanges();
      })
      .catch(error => {
        console.error('Error al cargar pokémons:', error);
      });
  }

  onsearch(busqueda: string) {
    if (!busqueda) {
      this.filteredpokemonslista = this.pokemonslista;
      return;
    }
    this.filteredpokemonslista = this.pokemonslista.filter(p =>
      p?.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }
}