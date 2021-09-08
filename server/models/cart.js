import mongoose from 'mongoose';
import Product from './product.js';

// Shopping cart and wishlist will use same schema
const CartSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
    default: 0,
  },
  totalQuantity: {
    type: Number,
    default: 0,
  },
  products: {
    type: [Product],
    default: [],
  },
})

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;
