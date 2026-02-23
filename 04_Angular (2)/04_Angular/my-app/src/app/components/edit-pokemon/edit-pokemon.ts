import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Pokemonservice } from '../pokemonservice';
import { Pokemonsinterface } from '../pokemonsinterface';

@Component({
  selector: 'app-edit-pokemon',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-pokemon.html',
  styleUrl: './edit-pokemon.css',
})
export class EditPokemon implements OnInit {
  pokemonservice = inject(Pokemonservice);
  router = inject(Router);
  route = inject(ActivatedRoute);
  pokemonNombre: string = '';
  isSubmitting = false;
  isLoading = true;

  formPokemon = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.pokemonNombre = this.route.snapshot.params['nombre'];
    this.cargarPokemon();
  }

  async cargarPokemon() {
    try {
      console.log('Cargando pokémon:', this.pokemonNombre);
      const pokemon = await this.pokemonservice.getpokemonpornombre(this.pokemonNombre);
      
      if (pokemon) {
        console.log('Pokémon encontrado:', pokemon);
        this.formPokemon.patchValue({
          nombre: pokemon.nombre,
          tipo: pokemon.tipo,
          description: pokemon.description,
          photo: pokemon.photo
        });
        this.isLoading = false;
      } else {
        alert('Pokémon no encontrado');
        this.router.navigate(['/']);
      }
    } catch (error) {
      console.error('Error al cargar el Pokémon:', error);
      alert('Error al cargar el Pokémon. Verifica que el servidor esté corriendo.');
      this.router.navigate(['/']);
    }
  }

  async onSubmit() {
    if (this.formPokemon.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      const pokemonActualizado = {
        nombre: this.formPokemon.value.nombre?.trim() ?? '',
        tipo: this.formPokemon.value.tipo?.trim() ?? '',
        description: this.formPokemon.value.description?.trim() ?? '',
        photo: this.formPokemon.value.photo?.trim() ?? ''
      };

      console.log('Actualizando pokémon:', this.pokemonNombre, pokemonActualizado);

      try {
        const resultado = await this.pokemonservice.updatePokemon(this.pokemonNombre, pokemonActualizado);
        
        if (resultado) {
          alert('¡Pokémon actualizado exitosamente!');
          this.router.navigate(['/details', pokemonActualizado.nombre]);
        } else {
          alert('Error: No se pudo actualizar el Pokémon. Verifica que el servidor esté corriendo.');
          this.isSubmitting = false;
        }
      } catch (error) {
        console.error('Error al actualizar el Pokémon:', error);
        this.isSubmitting = false;
      }
    } else if (!this.formPokemon.valid) {
      alert('Por favor completa todos los campos correctamente');
    }
  }

  onCancel() {
    this.router.navigate(['/details', this.pokemonNombre]);
  }
}
