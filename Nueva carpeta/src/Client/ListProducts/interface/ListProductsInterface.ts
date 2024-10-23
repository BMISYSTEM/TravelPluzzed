export interface ListaTours {
    data:   Data;
    status: number;
}

export interface Data {
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
    en:  string;
    es:  string;
    pt?: string;
    de?: string;
    fr?: string;
    it?: string;
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
