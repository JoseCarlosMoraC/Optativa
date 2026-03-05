import { Routes } from '@angular/router';
import { Pokemon } from './pokemon/pokemon';
import { Details } from './details/details';
import { CreatePokemon } from './create-pokemon/create-pokemon';
import { EditPokemon } from './edit-pokemon/edit-pokemon';

export const routes: Routes = [
  { path: '', component: Pokemon, title: 'Pokémon' },
  { path: 'create', component: CreatePokemon, title: 'Nuevo Pokémon' },
  { path: 'details/:nombre', component: Details, title: 'Detalle' },
  { path: 'edit/:nombre', component: EditPokemon, title: 'Editar' }
];