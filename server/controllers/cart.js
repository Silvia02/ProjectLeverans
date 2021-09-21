import User from '../models/user.js'
import Cart from '../models/cart.js'
import Product from '../models/product.js'

export const createCart = async (req, res) => {
  try {
    const cart = new Cart();
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const getCart = async (req, res) => {
  try {
    // const cartId = req.params.id;
    const userId = req.params.id;
    const user = await User.findById(userId);
    // const cart = await Cart.findById(cartId);
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const addToCart = async (req, res) => {
  try {
    // const cartId = req.params.id;

    const userId = req.params.id;
    const {productId} = req.body;

    const product = await Product.findById(productId);

    const user = await User.findByIdAndUpdate(userId, {
        $push: { cart: product }
    }, {new: true}).exec();

    res.status(200).json(user.cart);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const removeFromCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const {productId} = req.body;

    // Do nothing right now because removing a single item is a lot harder than it seems
    const user = await User.findById(userId);
    const index = user.cart.findIndex(product => product._id === productId);
    let updatedCart = [...user.cart];
    updatedCart.splice(index, 1);

    user.cart = updatedCart;
    await user.save();

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const removeAllFromCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const {productId} = req.body;

    const user = await User.findByIdAndUpdate(userId, {
      $pull: {
        cart: {_id: productId}
      }
    }, {new: true}).exec();

    res.status(200).json(user.cart);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}