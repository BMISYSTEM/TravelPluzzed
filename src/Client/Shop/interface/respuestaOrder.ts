export interface Order {
    succes: Succes;
}

export interface Succes {
    id:     string;
    status: string;
    links:  Link[];
}

export interface Link {
    href:   string;
    rel:    string;
    method: string;
}
