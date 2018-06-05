import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  mostrar = true;

  frase: any = {
    mensaje: 'Una frase cualquiera o cita',
    autor: 'Fran Aragon'
  };

  personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];

}
