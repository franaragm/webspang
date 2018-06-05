import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

// Importar Rutas
import {ROUTES} from './app.routes';

// Importar Directivas personalizadas
import { ResaltadoDirective } from './directives/resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    DirectivasComponent,
    HomeComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
