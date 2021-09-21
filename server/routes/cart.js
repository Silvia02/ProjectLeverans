import express from 'express';
import {
  getCart,
  addToCart,
  createCart,
  removeFromCart,
  removeAllFromCart
} from '../controllers/cart.js';

const router = express.Router();

router.get('/:id', getCart);
router.post('/', createCart);
router.patch('/add/:id', addToCart);
router.patch('/remove/:id', removeFromCart);
router.patch('/delete/:id', removeAllFromCart);

export default router;
