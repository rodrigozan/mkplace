import { Router } from 'express';
import { getProducts } from '../controllers/products.controllers';

const productRoute = () => {
  const router = Router();

  router.get('/roles', getProducts);

  router.get('/product/:marca/:nome', (req, res) => {
    // TODO logic for retrieving roles
  });

  return router;
};