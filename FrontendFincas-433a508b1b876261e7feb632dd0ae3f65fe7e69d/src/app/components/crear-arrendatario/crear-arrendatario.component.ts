import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Arrendatario } from '../../models/Arrendatario';
import { ArrendatarioService } from '../../services/arrendatario.service';

@Component({
  selector: 'app-crear-arrendatario',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './crear-arrendatario.component.html',
  styleUrl: './crear-arrendatario.component.css'
})
export class CrearArrendatarioComponent {
arrendatario: Arrendatario;

constructor(
private arrendatarioService: ArrendatarioService,
){  
this.arrendatario = new Arrendatario();
}

crearArrendatario( ){
this.arrendatarioService.crearArrendatario( this.arrendatario ).then(response =>
{
  window.location.href = "/";
  }, error => {
    console.error('Error: ',error);
  });
}

}
