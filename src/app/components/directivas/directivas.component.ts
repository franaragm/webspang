import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  fontSize: number = 10;
  alerta: string = 'alert-danger';
  loading: boolean = false;
  alertaswitch:string = 'info';

  propiedades: Object = {
    danger: true
  };

  constructor() { }

  ejecutar() {
    this.loading = true;
    setTimeout(()=>this.loading = false, 3000 )
  }

}
