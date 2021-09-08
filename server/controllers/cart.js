import User from '../models/user.js'
import Cart from '../models/cart.js'
import Product from '../models/product.js'

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const addToCart = async (req, res) => {
  try {
    const {userId, productId} = req.body;

    const cartId = await User.findById(userId).cart.id;
    const product = await Product.findById(productId);

    await Cart.findByIdAndUpdate(cartId,
      {
        $push: {
          product: product
        }
      }
    )
    res.status(200);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}
