import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Jugadorservice } from '../jugadorservice';
import { Jugadoresinterface } from '../jugadoresinterface';

@Component({
  selector: 'app-details-jugador',
  imports: [CommonModule],
  templateUrl: './details-jugador.html',
  styleUrl: './details-jugador.css',
})
export class Details implements OnInit {

  route:          ActivatedRoute = inject(ActivatedRoute);
  router:         Router         = inject(Router);
  jugadorservice                 = inject(Jugadorservice);
  jugador:        Jugadoresinterface | undefined;
  private cdr = inject(ChangeDetectorRef);

  constructor() {

  }

  ngOnInit(): void {
    const jugadornombre = this.route.snapshot.params['nombre'];

    console.log('Buscando jugador:', jugadornombre);

    this.jugadorservice.getJugadorPorNombre(jugadornombre)
      .then((jugador) => {
        this.jugador = jugador;
        console.log('Jugador cargado:', jugador);
        this.cdr.detectChanges();
      })
      .catch(error => {
        console.error('Error al cargar jugador:', error);
      });
  }

  onEdit() {
    if (this.jugador) {
      this.router.navigate(['/edit', this.jugador.nombre]);
    }
  }

  async onDelete() {
    if (this.jugador) {
      const confirmDelete = confirm(`¿Estás seguro de que quieres eliminar a ${this.jugador.nombre}?`);

      if (confirmDelete) {
        try {
          const eliminado = await this.jugadorservice.deleteJugador(this.jugador.nombre);
          if (eliminado) {
            alert('¡Jugador eliminado exitosamente!');
            this.router.navigate(['/']);
          } else {
            alert('Error al eliminar el jugador');
          }
        } catch (error) {
          console.error('Error al eliminar:', error);
          alert('Error al eliminar el jugador');
        }
      }
    }
  }

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'Disponible': return 'estado-disponible';
      case 'Lesionado':  return 'estado-lesionado';
      case 'Sancionado': return 'estado-sancionado';
      default:           return '';
    }
  }
}