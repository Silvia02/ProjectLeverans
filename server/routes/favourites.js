import express from 'express';
import {
  getFavourites,
  addToFavourites,
  removeFromFavourites,
  addFavouritesToCart,
  addFileToFavourites
} from '../controllers/favourites.js';

const router = express.Router();

router.get('/:id', getFavourites);
router.patch('/add/:id', addToFavourites);
router.patch('/remove/:id', removeFromFavourites);
router.patch('/addToCart/:id', addFavouritesToCart);
router.patch('/addFile/:id', addFileToFavourites);

export default router;
