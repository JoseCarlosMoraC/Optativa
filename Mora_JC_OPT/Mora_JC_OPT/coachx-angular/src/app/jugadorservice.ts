import { Injectable } from '@angular/core';
import { Jugadoresinterface } from './jugadoresinterface';

@Injectable({
  providedIn: 'root'
})
export class Jugadorservice {

  private apiUrl = 'http://localhost:3000/jugadores';

  async getallJugadores(): Promise<Jugadoresinterface[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) throw new Error('Error al obtener jugadores');
      return await response.json();
    } catch (error) {
      console.error('Error en getallJugadores:', error);
      return [];
    }
  }

async getJugadorPorNombre(nombre: string) {
  const response = await fetch(this.apiUrl);
  const jugadores = await response.json();

  return jugadores.find(
    (j: any) => j.nombre.trim().toLowerCase() === nombre.trim().toLowerCase()
  ) || null;
}



  async createJugador(jugador: Jugadoresinterface): Promise<Jugadoresinterface | null> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jugador)
      });
      if (!response.ok) throw new Error('Error al crear jugador');
      return await response.json();
    } catch (error) {
      console.error('Error en createJugador:', error);
      return null;
    }
  }

async updateJugador(nombre: string, jugadorActualizado: any) {

  const response = await fetch(
    `${this.apiUrl}?nombre=${encodeURIComponent(nombre)}`
  );

  if (!response.ok) throw new Error('Error al buscar jugador');

  const data = await response.json();
  if (!data.length) return false;

  const jugador = data[0];

  const updateResponse = await fetch(`${this.apiUrl}/${jugador.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...jugadorActualizado,
      id: jugador.id
    })
  });

  return updateResponse.ok;
}



  async deleteJugador(nombre: string): Promise<boolean> {
    try {
      const jugador = await this.getJugadorPorNombre(nombre);
      if (!jugador?.id) throw new Error('Jugador no encontrado');

      const response = await fetch(`${this.apiUrl}/${jugador.id}`, {
        method: 'DELETE'
      });
      return response.ok;
    } catch (error) {
      console.error('Error en deleteJugador:', error);
      return false;
    }
  }
}