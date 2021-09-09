import User from '../models/user.js'

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const getOneUser = async (req, res) => {
  try {
    const {userId} = req.body;
    const user = await User.findById(userId);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const createUser = async (req, res) => {
  try {
    // create user
    res.status(200);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}
