import express from 'express';
import {getAllProducts, getOneProduct, getCategory} from '../controllers/products.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.get('/category/:category', getCategory);

export default router;
