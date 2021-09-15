import React, {useEffect, useState} from 'react'
import '../css/mycart.css'
import { AddtoCartButton } from '../pages/ProductStyle'
import { Link } from 'react-router-dom'
import {
  Button,
  Grid,
  Typography,
  Paper,
  Box,
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const MyCart = () => {
  const paperStyle = {
    padding: 20,
    width: '100%',
    height: 'auto',
    margin: '5%'
  }

  const [cart, setCart] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  // Updates all cart information it changes
  const cartUpdater = (newCart) => {
    // Removes duplicates and sets quantity
    const reducedCart = cartReducer(newCart)
    setCart(reducedCart);

    // Calculate price for entire cart
    const price = cartPriceCalculator(reducedCart);
    setCartPrice(price);
  }

  // Remove duplicates and add quanitty of products
  const cartReducer = (products) => {
    let reducedCart = {};
    products.forEach(product => {
      if (!reducedCart[product._id]) {
        reducedCart[product._id] = {
          ...product,
          quantity: 1
        }
      } else {
        reducedCart[product._id].quantity += 1;
      }
    })

    // return cart obj as array
    return Object.values(reducedCart);
  }

  // Takes in a reduced cart and returns the total value
  const cartPriceCalculator = (cart) => {
    if (!cart.length) { // if cart is empty return 0
      return 0;
    } else if (cart.length === 1) { // if cart contains only one item, return its price
      return cart[0].price;
    } else {
      // else return total cart price
      // Explanation: total, is a product object with price and quantity
      // therefore the reducer function needs to return a similar object
      return cart.reduce((total, current) => ({
        price: (total.price * total.quantity) + (current.price * current.quantity),
        quantity: 1
      })).price;
    }
  }

  const fetchCart = async () => {
    const TEMP_CART_ID = '613f3abe06c475e0525cee9b';
    const response = await fetch(`http://localhost:4000/cart/${TEMP_CART_ID}`);
    const data = await response.json();

    // Update cart information
    cartUpdater(data.products);
  }

  const changeQuantity = async (productId, operation) => {
    const TEMP_CART_ID = '613f3abe06c475e0525cee9b';
    const addOrRemove = operation === 'increment' ? 'add' : 'remove';
    const response = await fetch(`http://localhost:4000/cart/${addOrRemove}/${TEMP_CART_ID}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "productId": productId
      })
    });

    const data = await response.json();

    // Update cart information
    cartUpdater(data.products);
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

    // Update cart information
    cartUpdater(data.products);
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
              <Box key={product._id} display="flex" paddingY="5px" alignItems="center" style={{justifyContent: 'space-between'}}>
                <img src={product.image} alt={product.name} />
                <div>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="h6" align="center" style={{ marginTop: "10px" }}>${product.price}</Typography>
                  <div>
                    <button style={{width: "15px", backgroundColor:"white", cursor: "hover"}} onClick={() => changeQuantity(product._id, 'increment')}>+</button>
                    <span> {product.quantity} </span>
                    {/* decrement currently does not work, therefore button is disabled */}
                    <button disabled={true} style={{ width: "15px", backgroundColor: "white", cursor: "not-allowed"}} onClick={() => changeQuantity(product._id, 'decrement')}>-</button>
                  </div>
                </div>
                <HighlightOffIcon size="20" style={{cursor: 'pointer'}} onClick={() => removeProduct(product._id)} />
              
              </Box>
              
            ))
          }
          <br />
          <hr style= {{width:"100%"}}/>
          <Typography variant="h5" style={{textAlign:"end", marginTop:"25px", fontWeight:"bold"}}>Total: ${cartPrice.toFixed(2)}</Typography>
          <Link to="/checkout"><AddtoCartButton style={{ width: '100%', marginTop: '25px', border: "none" }}>Check out</AddtoCartButton></Link>
        </Paper>
      </Grid>
    </div>
  )
}
export default MyCart
