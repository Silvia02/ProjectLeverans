import mongoose from 'mongoose';
import Product from './product.js';

const FavouritesSchema = new mongoose.Schema({
  products: {
    type: [Product.schema],
    default: [],
  },
})

const Favourites = mongoose.model('Favourites', FavouritesSchema);
export default Favourites;
