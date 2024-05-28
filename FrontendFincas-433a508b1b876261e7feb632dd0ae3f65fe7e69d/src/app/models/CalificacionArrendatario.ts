import { Arrendador } from './Arrendador';
import { Arrendatario } from './Arrendatario';

export class CalificacionArrendatario {
    constructor(
        public calificacion?: number | null,
        public id_arrendador?: Arrendador | null,
        public id_arrendatario?: Arrendatario | null
    ) {}
}
