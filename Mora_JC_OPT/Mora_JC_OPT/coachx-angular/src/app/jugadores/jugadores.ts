import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Jugadoresinterface } from '../jugadoresinterface';
import { JugadorCard } from '../jugador-card/jugador-card';
import { Jugadorservice } from '../jugadorservice';

@Component({
  selector: 'app-jugadores',
  imports: [CommonModule, JugadorCard, RouterModule],
  templateUrl: './jugadores.html',
  styleUrl: './jugadores.css',
})
export class Jugadores implements OnInit {

  jugadoreslista: Jugadoresinterface[] = [];
  filteredjugadoreslista: Jugadoresinterface[] = [];
  jugadorservice: Jugadorservice = inject(Jugadorservice);
  private cdr = inject(ChangeDetectorRef);

  constructor() {

  }

  ngOnInit(): void {
    this.jugadorservice.getallJugadores()
      .then((datos: Jugadoresinterface[]) => {
        this.jugadoreslista = datos;
        this.filteredjugadoreslista = datos;
        this.cdr.detectChanges();
      })
      .catch(error => {
        console.error('Error al cargar jugadores:', error);
      });
  }

  onsearch(busqueda: string) {
    if (!busqueda) {
      this.filteredjugadoreslista = this.jugadoreslista;
      return;
    }
    this.filteredjugadoreslista = this.jugadoreslista.filter(j =>
      j?.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }
}