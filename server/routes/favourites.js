import express from 'express';
import {
  getFavourites,
  addToFavourites,
  removeFromFavourites,
  addFavouritesToCart
} from '../controllers/favourites.js';

const router = express.Router();

router.get('/:id', getFavourites);
router.patch('/add/:id', addToFavourites);
router.patch('/remove/:id', removeFromFavourites);
router.patch('/addToCart/:id', addFavouritesToCart);

export default router;
