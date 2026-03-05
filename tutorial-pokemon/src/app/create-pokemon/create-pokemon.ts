import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemonservice } from '../pokemonservice';

@Component({
  selector: 'app-create-pokemon',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-pokemon.html',
  styleUrl: './create-pokemon.css',
})
export class CreatePokemon {
  pokemonservice = inject(Pokemonservice);
  router = inject(Router);
  isSubmitting = false;

  formPokemon = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required])
  });

  async onSubmit() {
    if (this.formPokemon.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      const nuevoPokemon = {
        nombre: this.formPokemon.value.nombre?.trim() ?? '',
        tipo: this.formPokemon.value.tipo?.trim() ?? '',
        description: this.formPokemon.value.description?.trim() ?? '',
        photo: this.formPokemon.value.photo?.trim() ?? ''
      };

      try {
        const resultado = await this.pokemonservice.createPokemon(nuevoPokemon);
        if (resultado) {
          alert('Pokémon registrado con éxito');
          this.router.navigate(['/']);
        } else {
          alert('No se pudo registrar el Pokémon. Comprueba que el servidor esté activo.');
          this.isSubmitting = false;
        }
      } catch (error) {
        console.error('Error al registrar el Pokémon:', error);
        alert('No se pudo conectar con el servidor. Asegúrate de que json-server esté corriendo.');
        this.isSubmitting = false;
      }
    } else if (!this.formPokemon.valid) {
      alert('Rellena todos los campos antes de continuar');
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}