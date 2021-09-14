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
    const cartId = req.params.id;
    const cart = await Cart.findById(cartId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const addToCart = async (req, res) => {
  try {
    const cartId = req.params.id;
    const {productId} = req.body;

    const product = await Product.findById(productId);

    await Cart.findByIdAndUpdate(cartId,
      {
        $push: {products: product},
        // $inc: {
        //   totalPrice: product.price,
        //   totalQuantity: 1,
        // },
      }
    );
    res.status(200).json({message: 'Successfully added item to cart'});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const removeFromCart = async (req, res) => {
  try {
    // const {productId} = req.body;
    const cartId = req.params.id;

    // const cartId = await User.findById(userId).cart.id;
    // const product = await Product.findById(productId);

    await Cart.findByIdAndUpdate(cartId,
      {
        $pop: {products: 1},
        // $inc: {
        //   totalPrice: -product.price,
        //   totalQuantity: -1,
        // },
      }
    );
    res.status(200).send('Successfully removed product from cart');
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const removeAllFromCart = async (req, res) => {
  try {
    const {productId} = req.body;
    const cartId = req.params.id;

    // const product = await Product.findById(productId);

    const cart = await Cart.findByIdAndUpdate(cartId, {
      $pull: {
        products: {_id: productId}
      }
    }, {new: true}).exec();

    // await cart.save();

    res.status(200).send(cart);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}
