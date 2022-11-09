import { Schema, model} from "mongoose";
import { BaseProduct } from "../interface/product.interface";

const ProductSchema: Schema = new Schema<BaseProduct>({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório.'],
    },
    marca: {
        type: String,
        required: [true, 'Marca é obrigatório.'],
        unique: true,
    },
    vendedor: {
        type: String,
        required: [true, 'Vendedor é obrigatório.'],
    },
    faixaDePreco: {
        type: Number,
        required: [true, 'Faixa de Preço é obrigatório.'],
    }
});

const Product = model<BaseProduct>('products', ProductSchema);

export default Product;