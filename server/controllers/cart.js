import User from '../models/user.js'
import Cart from '../models/cart.js'
import Product from '../models/product.js'

export const getCart = async (req, res) => {
  try {
    const {userId} = req.body;
    const cartId = await User.findById(userId).cart.id;
    const cart = await Cart.findById(cartId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

// YOU CAN USE $addToSet and use $inc the price and quantity 
// instead of saving all of the products (even duplicates)
// in one long ass array

export const addToCart = async (req, res) => {
  try {
    const {userId} = req.body;
    const productId = req.params.id;

    const cartId = await User.findById(userId).cart.id;
    const product = await Product.findById(productId);

    await Cart.findByIdAndUpdate(cartId,
      {
        $push: {product},
        $inc: {
          totalPrice: product.price,
          totalQuantity: 1,
        },
      }
    );
    res.status(200);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const removeFromCart = async (req, res) => {
  try {
    const {userId} = req.body;
    const productId = req.params.id;

    const cartId = await User.findById(userId).cart.id;
    const product = await Product.findById(productId);

    await Cart.findByIdAndUpdate(cartId,
      {
        $pop: {product},
        $inc: {
          totalPrice: -product.price,
          totalQuantity: -1,
        },
      }
    );
    res.status(200);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const removeAllFromCart = async (req, res) => {
  try {
    const {userId} = req.body;
    const productId = req.params.id;

    const cartId = await User.findById(userId).cart.id;
    const product = await Product.findById(productId);

    await Cart.findByIdAndUpdate(cartId, {$pull: {product}});
    res.status(200);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}
