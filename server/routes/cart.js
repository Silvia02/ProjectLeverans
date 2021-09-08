import express from 'express';
import {getCart, addToCart} from '../controllers/cart.js';

const router = express.Router();

router.get('/', getCart);
router.post('/', addToCart);
// router.patch('/:product/quantity', update);
// router.delete('/:product', removeItem);

// router.patch('/', updateQuantity);
// router.patch('/:product/quantity', update);
// router.patch('/:product/productQuantity', update);


export default router;

