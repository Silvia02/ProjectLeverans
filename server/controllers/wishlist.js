import Wishlist from '../models/wishlist.js'
import Cart from '../models/cart.js'
import Product from '../models/product.js'

export const createWishlist = async (req, res) => {
  try {
    const wishlist = new Wishlist();
    await wishlist.save();
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const getWishlist = async (req, res) => {
  try {
    const wishlistId = req.params.id;
    const wishlist = await Wishlist.findById(wishlistId);
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const addToWishlist = async (req, res) => {
  try {
    const wishlistId = req.params.id;
    const {productId} = req.body;

    const product = await Product.findById(productId);

    const wishlist = await Wishlist.findByIdAndUpdate(wishlistId, {
      $addToSet: {products: product},
    }, {new: true}).exec();

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const removeFromWishlist = async (req, res) => {
  try {
    const {productId} = req.body;
    const wishlistId = req.params.id;

    const wishlist = await Wishlist.findByIdAndUpdate(wishlistId, {
      $pull: {
        products: {_id: productId}
      }
    }, {new: true}).exec();

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const addWishlistToCart = async (req, res) => {
  try {
    const {cartId, wishlist} = req.body;

    const cart = await Cart.findById(cartId);
    cart.products = [...cart.products, ...wishlist];
    cart.save();

    res.status(200).send(cart);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}
