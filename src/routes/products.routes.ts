import { Router } from 'express';
import { get } from '../controllers/products.controllers';

export const productRoute = () => {
  const router = Router();

  router.get('/products', get);

  router.get('/product/:marca/:nome', (req, res) => {
    console.log("então ta, rolou")
  });

  return router;
};