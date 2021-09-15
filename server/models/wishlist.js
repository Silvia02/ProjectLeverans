import mongoose from 'mongoose';
import Product from './product.js';

const WishlistSchema = new mongoose.Schema({
  products: {
    type: [Product.schema],
    default: [],
  },
})

const Wishlist = mongoose.model('Wishlist', WishlistSchema);
export default Wishlist;
