export interface Countrys {
    data:   Datum[];
    status: number;
}

export interface Datum {
    id:         number;
    title:      UrLs;
    shortTitle: string;
    URLs:       UrLs;
}

export interface UrLs {
    en: string;
    es: string;
    pt: string;
    de: string;
    fr: string;
    it: string;
}
