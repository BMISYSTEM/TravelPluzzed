export interface Create {
    errors: Error[];
}

export interface Error {
    type:     Type;
    value:    string;
    msg:      string;
    path:     string;
    location: Location;
}

export enum Location {
    Body = "body",
}

export enum Type {
    Field = "field",
}
