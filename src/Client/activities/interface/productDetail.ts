export interface DetailProduct {
    data:   Data;
    status: number;
}

export interface Data {
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
    POIs:          POIs[];
    titleImageURL: string;
    categoryId:    number;
    images:        Image[];
    videoURL:      string;
    rating:        number;
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
    currency: string;
}
