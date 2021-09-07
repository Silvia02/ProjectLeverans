import express from 'express';
import {getCart} from '../controllers/cart.js';

const router = express.Router();

router.get('/', getCart);
// router.post('/:product', addItem);
// router.patch('/:product/quantity', update);
// router.delete('/:product', removeItem);

// router.patch('/', updateQuantity);
// router.patch('/:product/quantity', update);
// router.patch('/:product/productQuantity', update);


export default router;

