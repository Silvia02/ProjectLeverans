import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Store image as url
    required: true,
  },
  price: {
    type: Float,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    default: [],
  },
})

export default Product = mongoose.Model('Product', ProductSchema);

