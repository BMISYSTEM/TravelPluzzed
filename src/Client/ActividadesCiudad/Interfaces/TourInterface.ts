export interface Tours {
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
    descripcion:           string;
    intinerario:           string;
    duracion:              string;
    incluye:               string;
    no_incluye:            string;
    accesibilidad:         string;
    mascotas:              number;
    salidas:               string;
    punto_encuentro:       string;
    reembolsable:          number;
    pais:                  string;
    ciudad:                string;
    createdAt:             Date;
    updatedAt:             Date;
    imagen:                string;
}
