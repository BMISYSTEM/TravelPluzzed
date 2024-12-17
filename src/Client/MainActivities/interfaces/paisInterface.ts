export interface Paises {
    succes: Succe[];
}

export interface Succe {
    id:        number;
    nombre:    string;
    prefijo:   number;
    imagen:    string;
    destacado: number;
    createdAt: Date;
    updatedAt: Date;
}
