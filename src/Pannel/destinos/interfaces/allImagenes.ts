export interface AllImagenes {
    imagenes: Array<Imagene>;
}

export interface Imagene {
    id:        number;
    url:       string;
    createdAt: Date;
    updatedAt: Date;
    tourId:    number;
}
