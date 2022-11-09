import { Request, Response } from 'express';
import { find } from "../services/products.service";

const getProducts = async (req: Request, res: Response) => {
    await find()
        .then((data) => res.status(200).json({ products: data }))
        .catch((err: any) => {
            res.status(404).json({ message: 'Products not found' });
            console.log(err);
        });
};

export { getProducts };