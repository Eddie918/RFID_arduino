import { Arrendador } from "./Arrendador";
import { Propiedad } from "./Propiedad";

export class CalificacionPropiedad {
    constructor(
        public calificacion?: number | null,
        public arrendador?: Arrendador | null,
        public propiedad?: Propiedad | null
    ) {}
}
