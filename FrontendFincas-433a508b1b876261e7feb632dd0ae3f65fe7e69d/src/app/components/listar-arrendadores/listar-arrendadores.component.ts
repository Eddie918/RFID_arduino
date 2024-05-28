import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Arrendador } from '../../models/Arrendador';
import { ArrendadorService } from '../../services/arrendador.service';

@Component({
  selector: 'app-listar-arrendadores',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './listar-arrendadores.component.html',
  styleUrl: './listar-arrendadores.component.css'
})
export class ListarArrendadoresComponent {

  arrendadores: Arrendador[] = [];

  constructor(
    private arrendadorService: ArrendadorService
  ){}

  ngOnInit(): void{
    this.listarArrendadores();
  }
  
  listarArrendadores(){
    this.arrendadorService.listarArrendadores().then(response =>{
      this.arrendadores = response;
    })
  }

  eliminarArrendador(id_arrendador: number){
    this.arrendadorService.eliminarArrendador(id_arrendador).then(response =>{
      if(response){
        this.listarArrendadores();
      }
    })
  }


}
