import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Jugadorservice } from '../jugadorservice';

@Component({
  selector: 'app-edit-jugador',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-jugador.html',
  styleUrl: './edit-jugador.css',
})
export class EditJugador implements OnInit {

  jugadorservice = inject(Jugadorservice);
  router = inject(Router);
  route = inject(ActivatedRoute);
  cd = inject(ChangeDetectorRef);

  jugadorNombre = '';
  isSubmitting = false;
  isLoading = true;

  formJugador = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    dorsal: new FormControl('', [Validators.required]),
    posicion: new FormControl('', [Validators.required]),
    equipo: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    foto: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    const nombreParam = this.route.snapshot.params['nombre'];

    if (!nombreParam) {
      this.router.navigate(['/']);
      return;
    }

    this.jugadorNombre = nombreParam;
    this.cargarJugador();
  }

  async cargarJugador() {
    this.isLoading = true;

    try {
      const jugador = await this.jugadorservice.getJugadorPorNombre(this.jugadorNombre);

      if (!jugador) {
        alert('Jugador no encontrado');
        return;
      }

      this.formJugador.patchValue({
        nombre: jugador.nombre,
        dorsal: String(jugador.dorsal),
        posicion: jugador.posicion,
        equipo: jugador.equipo,
        estado: jugador.estado,
        foto: jugador.foto
      });

    } catch (error) {
      console.error('Error al cargar jugador:', error);
      alert('Error al cargar jugador');
    } finally {
      this.isLoading = false;
      this.cd.detectChanges();
    }
  }

  async onSubmit() {
    if (!this.formJugador.valid || this.isSubmitting) {
      alert('Por favor completa todos los campos correctamente');
      return;
    }

    this.isSubmitting = true;

    const jugadorActualizado = {
      nombre: this.formJugador.value.nombre?.trim() ?? '',
      dorsal: Number(this.formJugador.value.dorsal),
      posicion: this.formJugador.value.posicion?.trim() ?? '',
      equipo: this.formJugador.value.equipo?.trim() ?? '',
      estado: this.formJugador.value.estado ?? 'Disponible',
      foto: this.formJugador.value.foto?.trim() ?? ''
    };

    try {
      const resultado = await this.jugadorservice.updateJugador(
        this.jugadorNombre,
        jugadorActualizado
      );

      if (!resultado) {
        alert('No se pudo actualizar el jugador.');
        this.isSubmitting = false;
        return;
      }

      alert('¡Jugador actualizado exitosamente!');
      this.router.navigate(['/details', encodeURIComponent(jugadorActualizado.nombre)]);

    } catch (error) {
      console.error('Error al actualizar jugador:', error);
      alert('Error al actualizar jugador.');
      this.isSubmitting = false;
    }
  }

  onCancel() {
    this.router.navigate(['/details', encodeURIComponent(this.jugadorNombre)]);
  }
}
