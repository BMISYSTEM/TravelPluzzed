export interface Tour {
    succes: Succe[];
}

export interface Succe {
    id:                    number;
    nombre:                string;
    precio:                number;
    nombre_hotel:          string;
    habitacion_individual: number;
    habitacion_doble:      number;
    habitacion_triple:     number;
    intinerario:           string;
    duracion:              string;
    incluye:               string;
    no_incluye:            string;
    accesibilidad:         string;
    mascotas:              number;
    salidas:               string;
    punto_encuentro:       string;
    reembolsable:          number;
    createdAt:             Date;
    updatedAt:             Date;
    pais:                  string;
    ciudad:                string;
    descripcion:           string;
}
