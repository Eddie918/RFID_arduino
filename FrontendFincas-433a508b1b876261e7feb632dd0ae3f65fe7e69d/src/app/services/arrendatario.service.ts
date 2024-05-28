import { Injectable } from '@angular/core';
import { Arrendatario } from '../models/Arrendatario';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ArrendatarioService {

  private apiUrl = 'http://localhost:8080/arrendatarios';

  constructor() { }

  crearArrendatario(arrendatario: Arrendatario): Promise<Arrendatario> {
    return axios.post<Arrendatario>(this.apiUrl, arrendatario).then(response => response.data);
  }

  listarArrendatarios(): Promise<Arrendatario[]> {
    return axios.get<Arrendatario[]>(this.apiUrl).then(response => response.data);
  }

  eliminarArrendatario(id_arrendatario: number): Promise<boolean> {
    const url = `${this.apiUrl}/${id_arrendatario}`;
    return axios.delete<boolean>(url).then(response => response.data);
  }
}
