import { Routes } from '@angular/router';
import { Jugadores }     from './jugadores/jugadores';
import { CreateJugador } from './create-jugador/create-jugador';
import { Details }       from './details-jugador/details-jugador';
import { EditJugador }   from './edit-jugador/edit-jugador';

export const routes: Routes = [
  { path: '',                component: Jugadores },
  { path: 'crear',           component: CreateJugador },
  { path: 'details/:nombre', component: Details },
  { path: 'edit/:nombre',    component: EditJugador },
  { path: '**',              redirectTo: '' }
];