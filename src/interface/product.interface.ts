export interface BaseProduct {
    nome: string;
    marca: string;
    vendedor: string;
    faixaDePreco: number;
}

export interface Product extends BaseProduct {
    id: number;
}