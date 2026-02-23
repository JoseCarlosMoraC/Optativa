import { Routes } from '@angular/router';
import { Pokemon } from './components/pokemon/pokemon';
import { Details } from './components/details/details';
import { CreatePokemon } from './components/create-pokemon/create-pokemon';
import { EditPokemon } from './components/edit-pokemon/edit-pokemon';

export const routes: Routes = [
  {path:'', component: Pokemon, title: 'Pokemon'},
  {path:'create', component: CreatePokemon, title: 'Crear Pokémon'},
  {path:'details/:nombre', component: Details, title: 'Detalles'},
  {path:'edit/:nombre', component: EditPokemon, title: 'Editar Pokémon'}
];
