import express from 'express';
import {
  getCart,
  addToCart,
  removeFromCart,
  removeAllFromCart
} from '../controllers/cart.js';

const router = express.Router();

router.get('/', getCart);
router.patch('/:id', addToCart);
router.patch('/:id', removeFromCart);
router.delete('/:id', removeAllFromCart);

export default router;
