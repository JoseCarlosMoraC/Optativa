import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jugadorservice } from '../jugadorservice';

@Component({
  selector: 'app-create-jugador',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-jugador.html',
  styleUrl: './create-jugador.css',
})
export class CreateJugador {

  jugadorservice = inject(Jugadorservice);
  router         = inject(Router);
  isSubmitting   = false;

  formJugador = new FormGroup({
    nombre:   new FormControl('', [Validators.required]),
    dorsal:   new FormControl('', [Validators.required]),
    posicion: new FormControl('', [Validators.required]),
    equipo:   new FormControl('', [Validators.required]),
    estado:   new FormControl('Disponible', [Validators.required]),
    foto:     new FormControl('', [Validators.required])
  });

  async onSubmit() {
    if (this.formJugador.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      const nuevoJugador = {
        nombre:   this.formJugador.value.nombre?.trim()   ?? '',
        dorsal:   Number(this.formJugador.value.dorsal),
        posicion: this.formJugador.value.posicion?.trim() ?? '',
        equipo:   this.formJugador.value.equipo?.trim()   ?? '',
        estado:   this.formJugador.value.estado           ?? 'Disponible',
        foto:     this.formJugador.value.foto?.trim()     ?? ''
      };

      console.log('Creando jugador:', nuevoJugador);

      try {
        const resultado = await this.jugadorservice.createJugador(nuevoJugador);

        if (resultado) {
          alert('¡Jugador creado exitosamente!');
          this.router.navigate(['/']);
        } else {
          alert('Error: No se pudo crear el jugador. Verifica que el servidor esté corriendo.');
          this.isSubmitting = false;
        }
      } catch (error) {
        console.error('Error al crear jugador:', error);
        alert('Error: No se pudo conectar con el servidor. Asegúrate de que json-server esté corriendo en http://localhost:3000');
        this.isSubmitting = false;
      }
    } else if (!this.formJugador.valid) {
      alert('Por favor completa todos los campos correctamente');
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}