import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { USUARIO_ROUTES } from './components/usuario/usuario.routes';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'directivas', component: DirectivasComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: USUARIO_ROUTES
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
