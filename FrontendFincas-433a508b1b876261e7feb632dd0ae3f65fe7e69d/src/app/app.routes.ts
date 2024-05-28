import { Routes } from '@angular/router';
import { CrearPropiedadComponent } from './components/crear-propiedad/crear-propiedad.component';
import { ListarPropiedadesComponent } from './components/listar-propiedades/listar-propiedades.component';
import { CrearArrendadorComponent } from './components/crear-arrendador/crear-arrendador.component';
import { ListarArrendadoresComponent } from './components/listar-arrendadores/listar-arrendadores.component';
import { CrearArrendatarioComponent } from './components/crear-arrendatario/crear-arrendatario.component';
import { ListarArrendatariosComponent } from './components/listar-arrendatarios/listar-arrendatarios.component';
import { MejoresPropiedadesComponent } from './components/mejores-propiedades/mejores-propiedades.component';

export const routes: Routes = [
    { path: '', component: MejoresPropiedadesComponent},
    { path: 'pruebaPost', component: CrearPropiedadComponent},
    { path: 'pruebaGet', component: ListarPropiedadesComponent},
    { path: 'Arrendadores/nuevo', component: CrearArrendadorComponent},
    { path: 'Arrendadores', component: ListarArrendadoresComponent},
    { path: 'Arrendatarios/nuevo', component: CrearArrendatarioComponent},
    { path: 'Arrendatarios', component: ListarArrendatariosComponent}

];
