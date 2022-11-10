import { BaseProduct, Product } from "../interface/product.interface";
import ProductModel from "../models/products.model";

const find = async () => {
    const product: Array<BaseProduct> = await ProductModel.find();
    return product;
};

const findByParams = async (value: BaseProduct) => {
    const product: Array<BaseProduct> = await ProductModel.find({ filtro: value });
    return product;
};

export { find, findByParams }
