import express from 'express';
import {
  getCart,
  addToCart,
  removeFromCart,
} from '../controllers/cart.js';

const router = express.Router();

router.get('/:id', getCart);
router.patch('/add/:id', addToCart);
router.patch('/remove/:id', removeFromCart);

export default router;
