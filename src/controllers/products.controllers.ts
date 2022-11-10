import { Request, Response } from 'express';
import { BaseProduct } from '../interface/product.interface';
import { find, findByParams } from "../services/products.service";

const get = async (req: Request, res: Response) => {
    await find()
        .then((data) => res.status(200).json({ products: data }))
        .catch((err: any) => {
            res.status(404).json({ message: 'Products not found' });
            console.log(err);
        });
};

const getByNome = async (req: Request, res: Response) => {
    const nome = req.body.nome
    await findByParams(nome)
        .then((data) => res.status(200).json({ products: data }))
        .catch((err: any) => {
            res.status(404).json({ message: 'Product not found' });
            console.log(err);
        });
};

export { get };