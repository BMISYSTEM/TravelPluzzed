export interface PaisData {
    succes: Succes;
}

export interface Succes {
    id:        number;
    nombre:    string;
    prefijo:   number;
    imagen:    string;
    destacado: number;
    createdAt: Date;
    updatedAt: Date;
}
