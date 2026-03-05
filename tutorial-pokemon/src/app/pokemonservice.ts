import { Injectable } from '@angular/core';
import { Pokemonsinterface } from './pokemonsinterface';

@Injectable({
  providedIn: 'root',
})
export class Pokemonservice {
  constructor () {}

  url = 'http://localhost:3000/pokemons'

  async getallpokemons(): Promise<Pokemonsinterface[]>{
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error('Error al obtener pokémons');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en getallpokemons:', error);
      return [];
    }
  }

  async getpokemonpornombre(nombre: string): Promise<Pokemonsinterface | undefined>{
    try {
      const nombreFormateado = nombre.trim().charAt(0).toUpperCase() + nombre.trim().slice(1).toLowerCase();
      const res = await fetch(`${this.url}?nombre=${nombreFormateado}`);
      if (!res.ok) {
        throw new Error('Error al buscar pokémon');
      }
      const listaEncontrada = await res.json();
      return listaEncontrada.length > 0 ? listaEncontrada[0] : undefined;
    } catch (error) {
      console.error('Error en getpokemonpornombre:', error);
      return undefined;
    }
  }

  async createPokemon(pokemon: Pokemonsinterface): Promise<Pokemonsinterface | null> {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
      });
      if (!response.ok) {
        throw new Error('Error al crear pokémon');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en createPokemon:', error);
      return null;
    }
  }

  async updatePokemon(nombreOriginal: string, pokemonActualizado: Pokemonsinterface): Promise<Pokemonsinterface | null> {
    try {
      const pokemonExistente = await this.getpokemonpornombre(nombreOriginal);
      if (!pokemonExistente) {
        return null;
      }
      const id = (pokemonExistente as any).id;
      if (!id) {
        return null;
      }
      const response = await fetch(`${this.url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...pokemonActualizado,
          id: id
        })
      });
      if (!response.ok) {
        throw new Error('Error al actualizar pokémon');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en updatePokemon:', error);
      return null;
    }
  }

  async deletePokemon(nombre: string): Promise<boolean> {
    try {
      const pokemonExistente = await this.getpokemonpornombre(nombre);
      if (!pokemonExistente) {
        return false;
      }
      const id = (pokemonExistente as any).id;
      if (!id) {
        return false;
      }
      const response = await fetch(`${this.url}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Error al eliminar pokémon');
      }
      return true;
    } catch (error) {
      console.error('Error en deletePokemon:', error);
      return false;
    }
  }

  submitentrenador(nombre: string){
    console.log(`¡${nombre} quiere entrenar a este Pokémon!`)
  }
}