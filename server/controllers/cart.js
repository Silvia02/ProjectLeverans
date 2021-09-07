import Cart from '../models/cart.js'
import Product from '../models/product.js'

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

// export const addToCart = async (req, res) => {
//   try {
//     const product = req.body;

//     const isProductInCart = await Cart.findOne({name: product.name});
//     if (isProductInCart) {
//       await isProductInCart.find({quantity})
//       await isProductInCart.updateOne({quantity: })
//     }
//     const
//       res.status(200).json(products);
//   } catch (error) {
//     res.status(404).json({message: error.message})
//   }
// }
