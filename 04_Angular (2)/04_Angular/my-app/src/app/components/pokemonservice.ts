import { Injectable } from '@angular/core';
import { Pokemonsinterface } from './pokemonsinterface';

@Injectable({
  providedIn: 'root',
})
export class Pokemonservice {
  constructor () {}

  url = 'http://localhost:3000/pokemons'

  // Obtener todos los pokémons
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

  // Obtener un pokémon por nombre
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

  // Crear un nuevo pokémon
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
      
      const created = await response.json();
      console.log('Pokémon creado:', created);
      return created;
    } catch (error) {
      console.error('Error en createPokemon:', error);
      return null;
    }
  }

  // Actualizar un pokémon existente
  async updatePokemon(nombreOriginal: string, pokemonActualizado: Pokemonsinterface): Promise<Pokemonsinterface | null> {
    try {
      // Primero buscar el pokémon para obtener su ID
      const pokemonExistente = await this.getpokemonpornombre(nombreOriginal);
      
      if (!pokemonExistente) {
        console.error('Pokémon no encontrado');
        return null;
      }

      // json-server requiere el ID en la URL
      const id = (pokemonExistente as any).id;
      
      if (!id) {
        console.error('El pokémon no tiene ID');
        return null;
      }

      const response = await fetch(`${this.url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...pokemonActualizado,
          id: id  // Mantener el ID original
        })
      });
      
      if (!response.ok) {
        throw new Error('Error al actualizar pokémon');
      }
      
      const updated = await response.json();
      console.log('Pokémon actualizado:', updated);
      return updated;
    } catch (error) {
      console.error('Error en updatePokemon:', error);
      return null;
    }
  }

  // Eliminar un pokémon
  async deletePokemon(nombre: string): Promise<boolean> {
    try {
      // Primero buscar el pokémon para obtener su ID
      const pokemonExistente = await this.getpokemonpornombre(nombre);
      
      if (!pokemonExistente) {
        console.error('Pokémon no encontrado');
        return false;
      }

      const id = (pokemonExistente as any).id;
      
      if (!id) {
        console.error('El pokémon no tiene ID');
        return false;
      }

      const response = await fetch(`${this.url}/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Error al eliminar pokémon');
      }
      
      console.log('Pokémon eliminado correctamente');
      return true;
    } catch (error) {
      console.error('Error en deletePokemon:', error);
      return false;
    }
  }

  submitentrenador(nombre: string){
    console.log(`¡${nombre} es el entrenador de este Pokémon!`)
  }
}
