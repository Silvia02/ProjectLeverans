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
    const userId = req.params.id;
    const user = await User.findById(userId);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}
export const loginUser = async (req, res) => {
  const {email,password} = req.body
  User.findOne({email: email}, (err, user) => {
    if (!user) {
                 res.send({ message: "User not registered"})
      
    } else {
      if (password === user.password) {
        res.send({
          message: "Login Successfull",
          user: user
        })
      } else {
        res.send({
          message: "Password didn't match"
        })
      }
    }
  })
}

export const createUser = async (req, res) => {
  const { name, email, password } = req.body

  User.findOne({ email: email }, (err, user) => {
    
    if (user) {
      res.send({ message: "User Already Exists!Please try again" })
        
    } else {
        const user = new User({
            name,
            email,
            password
          })
            user.save(err => {
              if (err) {
                res.send(err)
              } else {
                res.send({ message: 'Registered Successfully', user })
              }
          })
    }
  
  })
}

