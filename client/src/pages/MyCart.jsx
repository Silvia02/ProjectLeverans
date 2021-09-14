import React, {useEffect, useState} from 'react'
import '../css/mycart.css'
import shoeimage from '../images/highheel.jpeg'
import shoeimage2 from '../images/sportblack.png'

import {
  Button,
  Grid,
  Typography,
  makeStyles,
  TextField,
  Paper,
  TableHead,
  TableCell,
  Table,
  TableRow,
  Box,
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const MyCart = () => {
  const paperStyle = {
    padding: 20,
    width: 320,
    height: 'auto',
    margin: '25px'
  }

  const [cart, setCart] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  const fetchCart = async () => {
    const TEMP_CART_ID = '613f3abe06c475e0525cee9b';
    const response = await fetch(`http://localhost:4000/cart/${TEMP_CART_ID}`);
    const data = await response.json();

    // Return nothing if cart is empty
    // if (data.products === []) return;

    // Set total price
    // const cartPrice = data.products.reduce((total, product) => total.price + product.price);

    console.log(data)

    // Add quantity and remove duplicate products
    let reducedCart = {};
    data.products.forEach(product => {
      if (!reducedCart[product._id]) {
        reducedCart[product._id] = {
          ...product,
          quantity: 1
        }
      } else {
        reducedCart[product._id].quantity += 1;
      }
    })

    // Set Cart without duplicates
    setCart(Object.values(reducedCart));


    if (!Object.values(reducedCart).length) return;


    console.log(Object.values(reducedCart)
      .reduce((total, current) => (
        total.price + (current.price * current.quantity)
      ))
    );

    // Set Total price
    reducedCart = Object.values(reducedCart);

    console.log(reducedCart);

    let price = reducedCart.reduce((total, current) => (
      total.price + (current.price * current.quantity)
    ))
    console.log(price);

    setCartPrice(price);
  }

  const removeProduct = async (productId) => {
    const TEMP_CART_ID = '613f3abe06c475e0525cee9b';
    const response = await fetch(`http://localhost:4000/cart/delete/${TEMP_CART_ID}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "productId": productId
      })
    });

    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchCart();
  }, [])

  return (
    <div>
      <h1>My Cart</h1>
      <Grid container>
        <Paper elevation={10} style={paperStyle}>
          {
            cart.map(product => (
              <Box key={product._id} display="flex" paddingY="5px" justifyContent="spaced-between" alignItems="center">
                <img src={product.image} alt={product.name} />
                <div>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography align="center">${product.price} | x{product.quantity}</Typography>
                </div>
                <HighlightOffIcon size="20" style={{cursor: 'pointer'}} onClick={() => removeProduct(product._id)} />
              </Box>
            ))
          }
          <Typography variant="h5">Total: ${cartPrice.toFixed(2)}</Typography>
        </Paper>
      </Grid>
    </div>
  )
}
export default MyCart
