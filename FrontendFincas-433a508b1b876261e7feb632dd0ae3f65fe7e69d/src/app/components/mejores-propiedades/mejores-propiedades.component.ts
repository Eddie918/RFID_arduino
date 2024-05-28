import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Propiedad } from '../../models/Propiedad';
import { PropiedadService } from '../../services/propiedad.service';

@Component({
  selector: 'app-mejores-propiedades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mejores-propiedades.component.html',
  styleUrl: './mejores-propiedades.component.css'
})
export class MejoresPropiedadesComponent {
  propiedades: Propiedad[] = [];
  constructor(
    private propiedadService: PropiedadService
  ) { }

  ngOnInit() {
    this.mejoresPropiedades();
  }
  
  mejoresPropiedades() {
    this.propiedadService.mejoresPropiedades().then(response => {
      this.propiedades = response;
    })
  }
}
