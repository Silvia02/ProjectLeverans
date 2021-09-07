import express from 'express';
import {getAllProducts, getOneProduct, addNewProduct} from '../controllers/products.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.post('/', addNewProduct);

export default router;
