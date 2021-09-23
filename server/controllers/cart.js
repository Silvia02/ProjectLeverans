import User from '../models/user.js'
import Product from '../models/product.js'

export const getCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const addToCart = async (req, res) => {
  try {
    const userId = req.params.id;
    // const {productId, shoeSize} = req.body;
    const {product, size} = req.body;

    // Add size to product
    product.size = size;

    // const product = await Product.findByIdAndUpdate(productId, {
    //   $set: {size: shoeSize},
    // }, {new: true}).exec();

    const user = await User.findByIdAndUpdate(userId, {
      $push: {cart: product}
    }, {new: true}).exec();

    res.status(200).json(user.cart);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const removeFromCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const {index} = req.body;

    const user = await User.findById(userId);

    let newCart = [...user.cart];
    newCart.splice(index, 1);

    user.cart = newCart;
    await user.save();

    res.status(200).json(user.cart);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}
