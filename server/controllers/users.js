import { response } from 'express';
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
  const { name, email, password } = req.body;
  const userExists = await User.findOne({email})
  if (userExists) {
    res.status(400);
    throw new error('User Already Exists');
  }
  const user = await User.create({
    name,
    email,
    password
  });
  if (user) {
    res.status(201).json({
      _id:user._id,
      name:user.name,
      email:user.email
    })
  }else {
    res.status(404).json({
      message: error.message
    });
  }
}

