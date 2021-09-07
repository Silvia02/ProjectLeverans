import mongoose from 'mongoose';

// Shopping cart and wishlist will use same schema
const CartSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
    required: true,
  },
  totalQuantity: {
    type: Number,
    required: true,
  },
  products: {
    type: [subSchema],
    default: [],
  },
})

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;
