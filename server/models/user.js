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
    minlength: [6, 'Minimum password length must be 6 characters']
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
// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password)
// });
const User = mongoose.model('User', UserSchema);
export default User;
