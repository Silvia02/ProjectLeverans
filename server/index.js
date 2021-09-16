import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

import cartRoutes from './routes/cart.js';
import favouritesRoutes from './routes/favourites.js';
import productsRoutes from './routes/products.js';
import {getOneUser} from './controllers/users.js';
import User from './models/user.js';

const app = express();

// Serve static files from client folder if in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.use(express.json());
app.use(cors());

app.use('/cart', cartRoutes);
app.use('/favourites', favouritesRoutes);
app.use('/products', productsRoutes);


app.post("/login", (req, res) => {
  const {
    email,
    password
  } = req.body
  User.findOne({
    email: email
  }, (err, user) => {
    if (user) {
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
    } else {
      res.send({
        message: "User not registered"
      })
    }
  })
})

app.post("/users", (req, res) => {
  const {
    name,
    email,
    password
  } = req.body
  User.findOne({
    email: email
  }, (err, user) => {
    if (user) {
      res.send({
        message: "User already registerd"
      })
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
          res.send({
            message: "Successfully Registered, Please login now."
          })
        }
      })
    }
  })

})


// Move these variables to seperate .env file
const CONNECTION_URL = 'mongodb+srv://rubin:pa55w0rd@tempcluster.gnptb.mongodb.net/tempCluster?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.error(error));
