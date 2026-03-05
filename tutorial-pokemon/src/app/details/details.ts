import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemonservice } from '../pokemonservice';
import { Pokemonsinterface } from '../pokemonsinterface';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  pokemonservice = inject(Pokemonservice);
  pokemoninterface: Pokemonsinterface | undefined;
  private cdr = inject(ChangeDetectorRef);

  formAngular = new FormGroup({
    nombreentrenador: new FormControl('')
  });

  constructor() {}

  ngOnInit(): void {
    const pokemonsnombre = this.route.snapshot.params['nombre'];
    this.pokemonservice.getpokemonpornombre(pokemonsnombre)
      .then((pokemoninterface) => {
        this.pokemoninterface = pokemoninterface;
        this.cdr.detectChanges();
      })
      .catch(error => {
        console.error('Error al cargar detalles:', error);
      });
  }

  onsubmit() {
    this.pokemonservice.submitentrenador(this.formAngular.value.nombreentrenador ?? '');
  }

  onEdit() {
    if (this.pokemoninterface) {
      this.router.navigate(['/edit', this.pokemoninterface.nombre]);
    }
  }

  async onDelete() {
    if (this.pokemoninterface) {
      const confirmDelete = confirm(`¿Seguro que quieres eliminar a ${this.pokemoninterface.nombre}?`);
      if (confirmDelete) {
        try {
          const eliminado = await this.pokemonservice.deletePokemon(this.pokemoninterface.nombre);
          if (eliminado) {
            alert('Pokémon eliminado correctamente');
            this.router.navigate(['/']);
          } else {
            alert('No se pudo eliminar el Pokémon');
          }
        } catch (error) {
          console.error('Error al eliminar:', error);
        }
      }
    }
  }
}