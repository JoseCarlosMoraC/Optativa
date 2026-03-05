import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Jugadoresinterface } from '../jugadoresinterface';

@Component({
  selector: 'app-jugador-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './jugador-card.html',
  styleUrl: './jugador-card.css',
})
export class JugadorCard {

  @Input() jugador!: Jugadoresinterface;

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'Disponible': return 'estado-disponible';
      case 'Lesionado':  return 'estado-lesionado';
      case 'Sancionado': return 'estado-sancionado';
      default:           return '';
    }
  }
}