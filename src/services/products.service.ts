import ProductModel from "../models/products.model";

exports.find = async function (query: any) {

    try {
        var products = await ProductModel.find(query)
        return products;
    } catch (e) {
        // Log Errors
        throw Error('Errors to find products')
    }
}