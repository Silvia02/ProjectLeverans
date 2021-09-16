import mongoose from 'mongoose';
import Product from './product.js';

const CartSchema = new mongoose.Schema({
  products: {
    type: [Product.schema],
    default: [],
  },
})

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;
