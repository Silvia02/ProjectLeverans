import Favourites from '../models/favourites.js'
import Cart from '../models/cart.js'
import Product from '../models/product.js'

export const createFavourites = async (req, res) => {
  try {
    const favourites = new Favourites();
    await favourites.save();
    res.status(200).json(favourites);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const getFavourites = async (req, res) => {
  try {
    const favouritesId = req.params.id;
    const favourites = await Favourites.findById(favouritesId);
    res.status(200).json(favourites);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const addToFavourites = async (req, res) => {
  try {
    const favouritesId = req.params.id;
    const {productId} = req.body;

    const product = await Product.findById(productId);

    const favourites = await Favourites.findByIdAndUpdate(favouritesId, {
      $addToSet: {products: product},
    }, {new: true}).exec();

    res.status(200).json(favourites);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const removeFromFavourites = async (req, res) => {
  try {
    const {productId} = req.body;
    const favouritesId = req.params.id;

    const favourites = await Favourites.findByIdAndUpdate(favouritesId, {
      $pull: {
        products: {_id: productId}
      }
    }, {new: true}).exec();

    res.status(200).json(favourites);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const addFavouritesToCart = async (req, res) => {
  try {
    const {cartId, favourites} = req.body;

    const cart = await Cart.findById(cartId);
    cart.products = [...cart.products, ...favourites];
    cart.save();

    res.status(200).send(cart);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}
