import User from '../models/user.js'

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
    const {product, size} = req.body;

    // Add size to product
    product.size = size;

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

    let updatedCart = [...user.cart];
    updatedCart.splice(index, 1);

    user.cart = updatedCart;
    await user.save();

    res.status(200).json(user.cart);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const clearCart = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    user.cart = [];
    await user.save();

    res.status(200).json(user.cart);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}
