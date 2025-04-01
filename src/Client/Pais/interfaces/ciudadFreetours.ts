export interface CiudadFreetours {
    data:   Datum[];
    status: number;
}

export interface Datum {
    id:          number;
    title:       UrLs;
    URLs:        UrLs;
    image:       string;
    coordinates: null | string;
}

export interface UrLs {
    en: string;
    es: string;
    pt: string;
    de: string;
    fr: string;
    it: string;
}
