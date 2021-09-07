import mongoose from 'mongoose';

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
    type: [String], // <-- Array of product IDs to refence -OR- subSchema
    default: [],
  },
  wishList: {
    type: [String], // ^^^
    default: [],
  }
})

export default User = mongoose.Model('User', UserSchema);
