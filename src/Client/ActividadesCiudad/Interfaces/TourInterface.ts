export interface Tours {
    succes:   Succe[];
    freetour: Freetour;
}

export interface Freetour {
    tours:        Tour[];
    currentPage:  number;
    totalPages:   number;
    totalObjects: number;
}

export interface Tour {
    id:            number;
    updatedAt:     Date;
    title:         UrLs;
    brief:         UrLs;
    description:   UrLs;
    providerTitle: string;
    URL:           string;
    URLs:          UrLs;
    price:         Price;
    length:        string;
    meetingPoint:  MeetingPoint;
    cityId:        number;
    countryId:     number;
    includes:      string[];
    POIs:          POIs[] | null;
    titleImageURL: string;
    categoryId:    number;
    images:        Image[];
    videoURL:      null | string;
    rating:        number | null;
    reviewsNumber: number;
}

export interface POIs {
    id:            number;
    title:         string;
    googlePlaceId: string;
}

export interface UrLs {
    en: string;
    es: string;
    pt: string;
    de: string;
    fr: string;
    it: string;
}

export interface Image {
    id:  number;
    URL: string;
}

export interface MeetingPoint {
    title:         string;
    coordinates:   string;
    googlePlaceId: string;
}

export interface Price {
    value:    number;
    currency: Currency;
}

export enum Currency {
    Eur = "EUR",
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
    imagen:                string;
}
