import { Router } from 'express';
import { addProducts, deleteData, getProducts ,getProductsById , updateProducts} from '../../controllers/products.v1.controller.js';

export const router = Router();

router.get('/', getProducts)

router.get('/:id', getProductsById)

router.post('/', addProducts);

router.put('/:id', updateProducts);

router.delete('/:id', deleteData);
