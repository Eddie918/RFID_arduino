import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Arrendatario } from '../../models/Arrendatario';
import { ArrendatarioService } from '../../services/arrendatario.service';

@Component({
  selector: 'app-listar-arrendatarios',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './listar-arrendatarios.component.html',
  styleUrl: './listar-arrendatarios.component.css'
})
export class ListarArrendatariosComponent {

  arrendatarios: Arrendatario[] = [];

  constructor(
    private arrendatarioService: ArrendatarioService
  ){}
  
  ngOnInit(): void{
    this.listarArrendatarios();
  }

  listarArrendatarios(){
    this.arrendatarioService.listarArrendatarios().then(response =>{
      this.arrendatarios = response;
    })
  }

  eliminarArrendatario(id_arrendatario: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este arrendatario?')) {
      this.arrendatarioService.eliminarArrendatario(id_arrendatario).then(response => {
        if (response) {
          // Si la eliminación es exitosa, forzar la recarga de la página
          window.location.reload();
          console.log('Arrendatario eliminado con éxito.');
        } else {
          console.log('Error al eliminar el arrendatario.');
        }
      }).catch(error => {
        console.error("Error al eliminar el arrendatario:", error);
      });
    }
  }


}
