export interface Comenatrios {
    succes: Succe[];
}

export interface Succe {
    id:         number;
    comentario: string;
    email:      string;
    id_tour:    number;
    start:      number;
    createdAt:  Date;
    updatedAt:  Date;
}
