import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import products from './routes/products.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
})

app.get('/products', products);

const CONNECTION_URL = 'mongodb+srv://rubin:pa55w0rd@tempcluster.gnptb.mongodb.net/tempCluster?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.error(error));
