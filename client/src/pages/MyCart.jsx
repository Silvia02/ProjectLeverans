import React, {useState, useEffect, useContext} from 'react';
import ApiUrlContext from '../ApiUrlContext.js';
import '../css/mycart.css'
import {AddtoCartButton} from '../pages/ProductStyle'
import {Link} from 'react-router-dom'
import {
  Grid,
  Typography,
  Paper,
  Box,
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const MyCart = () => {
  const paperStyle = {
    padding: 20,
    width: '90%',
    height: 'auto',
    margin: '5%'
  }

  const ApiUrl = useContext(ApiUrlContext);
  const [cart, setCart] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  useEffect(() => {
    fetchCart();
  }, [])

  // Updates all cart and price info
  const cartUpdater = (newCart) => {
    setCart(newCart);
    // Calculate price for entire cart
    const price = cartPriceCalculator(newCart);
    setCartPrice(price);
  }

  // Takes in a reduced cart and returns the total value
  const cartPriceCalculator = (cart) => {
    switch (cart.length) {
      case 0:
        return 0;
      case 1:
        return cart[0].price;
      default:
        return cart.reduce((total, current) => ({
          price: total.price + current.price,
        })).price;
    }
  }

  const fetchCart = async () => {
    const userId = JSON.parse(window.localStorage.getItem('MyUser'))._id;
    const response = await fetch(`${ApiUrl}/cart/${userId}`);
    const data = await response.json();
    cartUpdater(data);
  }

  const removeProduct = async (productId) => {
    const userId = JSON.parse(window.localStorage.getItem('MyUser'))._id;
    const response = await fetch(`${ApiUrl}/cart/delete/${userId}`, {
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
    cartUpdater(data);
  }

  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <Paper elevation={10} style={paperStyle}>
          {
            cart.map(product => (
              <Box key={product._id} display="flex" paddingY="5px" alignItems="center" style={{justifyContent: 'space-between'}}>
                <img src={product.image} alt={product.name} />
                <div>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="h6" align="center" style={{marginTop: "10px"}}>${product.price.toFixed(2)}</Typography>
                  <div>
                    <span>EU {product.size}</span>
                  </div>
                </div>
                <HighlightOffIcon size="20" style={{cursor: 'pointer'}} onClick={() => removeProduct(product._id)} />
              </Box>
            ))
          }
          <br />
          <hr style={{width: "100%"}} />
          <Typography variant="h5" style={{textAlign: "end", marginTop: "25px", fontWeight: "bold"}}>Total: ${cartPrice.toFixed(2)}</Typography>
          <Link to="/checkout"><AddtoCartButton style={{width: '100%', marginTop: '25px', border: "none"}}>Check out</AddtoCartButton></Link>
        </Paper>
      </Grid>
    </div>
  )
}

export default MyCart;
