import express from 'express';
import {
  getWishlist,
  addToWishlist,
  createWishlist,
  removeFromWishlist,
  addWishlistToCart
} from '../controllers/wishlist.js';

const router = express.Router();

router.get('/:id', getWishlist);
router.post('/', createWishlist);
router.patch('/add/:id', addToWishlist);
router.patch('/remove/:id', removeFromWishlist);
router.patch('/addToCart', addWishlistToCart);

export default router;
