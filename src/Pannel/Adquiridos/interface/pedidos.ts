export interface Pedidos {
    succes: Succe[];
}

export interface Succe {
    id:               number;
    nombre:           string;
    apellido:         string;
    email:            string;
    nit:              string;
    direccion:        string;
    telefono:         string;
    telefonorespaldo: string;
    comentario:       string;
    status:           boolean;
    valor_total:      number;
    id_pay:           string;
    createdAt:        Date;
    updatedAt:        Date;
}
