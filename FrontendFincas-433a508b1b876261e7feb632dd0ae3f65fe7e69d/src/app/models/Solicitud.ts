export class Solicitud {
    constructor(
        public id_solicitud?: number | null,
        public duracion?: number | null,
        public estado?: number | null,
        public id_arrendador?: number | null,
        public id_arrendatario?: number | null,
        public id_propiedad?: number | null
    ) {}
}
