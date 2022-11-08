import mongoose from 'mongoose';

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
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

const Product = mongoose.model('products', ProductSchema);
export default Product;