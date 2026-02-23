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

      console.log('Creando pokémon:', nuevoPokemon);

      try {
        const resultado = await this.pokemonservice.createPokemon(nuevoPokemon);
        
        if (resultado) {
          alert('¡Pokémon creado exitosamente!');
          this.router.navigate(['/']);
        } else {
          alert('Error: No se pudo crear el Pokémon. Verifica que el servidor esté corriendo.');
          this.isSubmitting = false;
        }
      } catch (error) {
        console.error('Error al crear el Pokémon:', error);
        alert('Error: No se pudo conectar con el servidor. Asegúrate de que json-server esté corriendo en http://localhost:3000');
        this.isSubmitting = false;
      }
    } else if (!this.formPokemon.valid) {
      alert('Por favor completa todos los campos correctamente');
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
