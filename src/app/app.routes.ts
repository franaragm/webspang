import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DirectivasComponent } from './components/directivas/directivas.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
