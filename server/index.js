import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// import cartRoutes from './routes/cart.js';
import productsRoutes from './routes/products.js';
import userRoutes from './routes/users.js'
import loginUser from './routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());

// app.use('/cart', cartRoutes);
app.use('/products', productsRoutes);
app.use('/users', userRoutes);
app.use('/login',loginUser)

// Move these variables to seperate .env file
const CONNECTION_URL = 'mongodb+srv://rubin:pa55w0rd@tempcluster.gnptb.mongodb.net/tempCluster?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.error(error));
