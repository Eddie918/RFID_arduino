import { Component } from '@angular/core';
import { Propiedad } from '../../models/Propiedad';
import { PropiedadService } from '../../services/propiedad.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-propiedad',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-propiedad.component.html',
  styleUrl: './crear-propiedad.component.css'
})
export class CrearPropiedadComponent {

  propiedad: Propiedad;

  constructor(
    private propiedadService: PropiedadService,
  ){
    this.propiedad = new Propiedad();
  }

  crearPropiedad( ){
    this.propiedadService.crearPropiedad( this.propiedad ).then(response => {
      window.location.href = "/";
    }, error => {
      console.error('Error: ',error);
    });
  }


}
