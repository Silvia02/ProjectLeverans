import express from 'express';
import {
  getFavourites,
  addToFavourites,
  createFavourites,
  removeFromFavourites,
  // addFavouritesToCart
} from '../controllers/favourites.js';

const router = express.Router();

router.get('/:id', getFavourites);
router.post('/', createFavourites);
router.patch('/add/:id', addToFavourites);
router.patch('/remove/:id', removeFromFavourites);
// router.patch('/addToCart', addFavouritesToCart);

export default router;
