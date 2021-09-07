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

export const addNewProduct = async (req, res) => {
  try {
    // const {products} = req.body;

    // for (let product of products) {
    //   await new Product(product).save();
    // }

    // res.status(201).json('bulked added products');

    const product = req.body;
    const newProduct = new Product(product)

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}
