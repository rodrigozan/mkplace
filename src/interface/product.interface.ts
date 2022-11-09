import { Document, Schema } from "mongoose";
export interface BaseProduct extends Document {
    nome: {
        type: Schema.Types.String,
        required: true,
    }
    marca: {
        type: Schema.Types.String,
        required: true,
    }
    vendedor: {
        type: Schema.Types.String,
        required: true,
    }
    faixaDePreco: {
        type: Schema.Types.Number,
        required: true,
    };
}

export interface Product extends BaseProduct {
    id: {
        type: Schema.Types.String,
        required: true,
        unique: true,
    }
}