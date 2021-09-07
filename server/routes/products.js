import express from 'express';
import {getAllProducts} from '../controllers/products.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getOneProduct);

export default router;
