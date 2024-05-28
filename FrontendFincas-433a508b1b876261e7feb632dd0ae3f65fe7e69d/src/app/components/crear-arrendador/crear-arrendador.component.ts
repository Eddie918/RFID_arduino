import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Arrendador } from '../../models/Arrendador';
import { ArrendadorService } from '../../services/arrendador.service';

@Component({
  selector: 'app-crear-arrendador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-arrendador.component.html',
  styleUrl: './crear-arrendador.component.css'
})
export class CrearArrendadorComponent {

  arrendador: Arrendador;

  constructor(
    private arrendadorService: ArrendadorService,
  ){
    this.arrendador = new Arrendador();
  }

  crearArrendador( ){
    this.arrendadorService.crearArrendador( this.arrendador ).then(response =>
      {
        window.location.href = "/";
      }, error => {
        console.error('Error: ',error);
      });
  }

}
