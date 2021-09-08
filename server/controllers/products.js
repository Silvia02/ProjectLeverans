import Product from '../models/product.js'

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const getOneProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const getCategory = async (req, res) => {
  try {
    const {category} = req.params;
    const product = await Product.find({
      category: {$regex: new RegExp(category, 'i')} // case insensitive query
    }).exec();
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

// Functions below are for development purposes only
// 
// NOTE: If you want to edit or add a product, please
// do that through mongoDB Atlas directly

// export const addNewProduct = async (req, res) => {
//   try {

//     const product = req.body;
//     const newProduct = new Product(product)

//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(409).json({message: error.message})
//   }
// }

// export const updateProduct = async (req, res) => {
//   try {
//     const {id} = req.params;
//     const updatedInfo = req.body;
//     await Product.findByIdAndUpdate(id, updatedInfo);
//     res.status(201)
//   } catch (error) {
//     res.status(409).json({message: error.message})
//   }
// }
