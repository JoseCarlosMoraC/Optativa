import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { QuienesSomos } from './pages/quienes-somos/quienes-somos';
import { Catalogo } from './pages/catalogo/catalogo';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'quienes-somos', component: QuienesSomos },
  { path: 'catalogo', component: Catalogo },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' }
];