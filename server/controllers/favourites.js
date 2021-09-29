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
    const {index} = req.body;

    const user = await User.findById(userId);

    let updatedFavourites = [...user.favourites];
    updatedFavourites.splice(index, 1);

    user.favourites = updatedFavourites;
    await user.save();

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
    // Add favourites with shoe size to cart
    user.cart = user.cart.concat(updatedFavourites);
    // Empty favourites
    user.favourites = [];
    // Save changes
    const updatedUser = await user.save();
    res.status(200).json(updatedUser.favourites);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const addFileToFavourites = async (req, res) => {
  try {
    const userId = req.params.id;
    const {favourites} = req.body;

    // Create new array of favourites based on names passed in body
    let newFavourites = await Product.find({
      name: {
        $in: favourites
      }
    });

    // Set user favourites to new items in file
    const user = await User.findById(userId);
    user.favourites = newFavourites;
    const updatedUser = await user.save();

    res.status(200).json(updatedUser.favourites);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}
