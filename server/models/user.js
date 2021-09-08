import mongoose from 'mongoose';
import Cart from './cart.js';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: Cart.schema,
    default: () => ({}),
  },
  wishList: {
    type: Cart.schema,
    default: () => ({}),
  }
})

const User = mongoose.model('User', UserSchema);
export default User;
