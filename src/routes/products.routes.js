import { Router } from 'express';
import { addProducts, deleteData, getProducts ,getProductsById , updateProducts} from '../controllers/products.v1.controller.js';

export const router = Router();

router.get('/products', getProducts)

router.get('/products/:id', getProductsById)

router.post('/products', addProducts);

router.put('/products/:id', updateProducts);

router.delete('/products/:id', deleteData);
