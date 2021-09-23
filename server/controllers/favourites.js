import User from '../models/user.js';
import Product from '../models/product.js'

export const getFavourites = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    res.status(200).json(user.favourites);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

// In addToCart in cart controller you are editing shoe size on dataset in atlas!!!!!!!
export const addToFavourites = async (req, res) => {
  try {
    const userId = req.params.id;
    const {product} = req.body;

    const user = await User.findByIdAndUpdate(userId, {
      $addToSet: {favourites: product},
    }, {new: true}).exec();

    res.status(200).json(user.favourites);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const removeFromFavourites = async (req, res) => {
  try {
    const userId = req.params.id;
    const {productId} = req.body;

    const product = await Product.findById(productId);
    const user = await User.findByIdAndUpdate(userId, {
      $pull: {favourites: {_id: product._id}}
    }, {new: true}).exec();

    res.status(200).json(user.favourites);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const addFavouritesToCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const {size} = req.body;

    const user = await User.findById(userId);
    const updatedFavourites = user.favourites.map(product => {
      product.size = size;
      return product;
    });
    user.cart = user.cart.concat(updatedFavourites);
    const newUser = await user.save();
    // const user = await User.findByIdAndUpdate(userId, {
    //   favourites: {
    //     $set: {
    //       size: size
    //     }
    //   }
    // }, {new: true}).exec();

    // }
    // const user = await User.findByIdAndUpdate(cartId, {
    // $set: {
    //   cart: {
    //     $concatArrays: [$$cart, $$]
    //   }
    // }
    // });
    // cart.products = [...cart.products, ...favourites];
    // cart.save();

    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}
