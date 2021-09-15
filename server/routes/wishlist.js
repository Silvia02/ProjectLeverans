import express from 'express';
import {
  getWishlist,
  addToWishlist,
  createWishlist,
  removeFromWishlist,
} from '../controllers/wishlist.js';

const router = express.Router();

router.get('/:id', getWishlist);
router.post('/', createWishlist);
router.patch('/add/:id', addToWishlist);
router.patch('/remove/:id', removeFromWishlist);

export default router;
