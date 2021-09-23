import express from 'express';
import {
  getCart,
  addToCart,
  // removeFromCart,
  removeAllFromCart
} from '../controllers/cart.js';

const router = express.Router();

router.get('/:id', getCart);
router.patch('/add/:id', addToCart);
// router.patch('/remove/:id', removeFromCart);
router.patch('/delete/:id', removeAllFromCart);

export default router;
