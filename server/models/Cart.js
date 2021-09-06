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

export default Cart = mongoose.Model('Cart', CartSchema);
