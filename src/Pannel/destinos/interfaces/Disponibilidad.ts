export interface Disponibilidades {
    succes: Succe[];
}

export interface Succe {
    id:          number;
    lunes:       boolean;
    martes:      boolean;
    miercoles:   boolean;
    jueves:      boolean;
    viernes:     boolean;
    sabado:      boolean;
    domingo:     boolean;
    hora_inicio: string;
    tour_id:     number;
    createdAt:   Date;
    updatedAt:   Date;
}
