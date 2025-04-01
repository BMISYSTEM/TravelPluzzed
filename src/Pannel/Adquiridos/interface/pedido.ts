export interface Pedido {
    succes: Succe[];
}

export interface Succe {
    id:             number;
    id_pedido:      number;
    id_tour:        number;
    fecha_tour:     string;
    mayores15:      number;
    menoresde15_a4: number;
    menores3:       number;
    mascotas:       number;
    createdAt:      Date;
    updatedAt:      Date;
    valor:          Number;
    valor_total:    Number;
}
