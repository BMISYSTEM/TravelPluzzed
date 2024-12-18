export interface Ciudades {
    succes: Succe[];
}

export interface Succe {
    id:        number;
    nombre:    string;
    pais:      number;
    destacado: number;
    imagen:    string;
    createdAt: Date;
    updatedAt: Date;
}
