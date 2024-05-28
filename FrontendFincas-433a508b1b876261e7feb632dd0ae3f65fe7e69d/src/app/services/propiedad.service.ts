import { Injectable } from '@angular/core';
import { Propiedad } from '../models/Propiedad';
import { Observable, of } from 'rxjs';

import axios, { Axios } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  private apiUrl = 'http://localhost:8080/propiedades';

  constructor() { }

  crearPropiedad( propiedad:Propiedad ): Promise< Propiedad > {
    return axios.post<Propiedad>(this.apiUrl, propiedad).then(response => response.data);
  }

  listarPropiedades(): Promise< Propiedad[] >{
    return axios.get< Propiedad[] >(this.apiUrl).then(response => response.data);
    
  }

  mejoresPropiedades(): Promise< Propiedad[] >{
    const url = `${this.apiUrl}/mejores`;
    const propiedades = axios.get< Propiedad[] >(url).then(response => response.data);
    console.log("propiedades ",propiedades);
    return axios.get< Propiedad[] >(url).then(response => response.data);
  }

}
