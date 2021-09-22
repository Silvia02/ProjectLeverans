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
import { CartPageWrapper, CartCard, CartText, CartWrapper, CheckoutWrapper, MyCartHeader } from './MyCartStyle.jsx';
import mycarticon from '../images/mycart.jpeg';
import Footer from '../components/footer/Footer.jsx';

const MyCart = () => {

  const ApiUrl = useContext(ApiUrlContext);
  const [cart, setCart] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  useEffect(() => {
    fetchCart();
  }, [])

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
          quantity: 1,
          price: product.price
        }
      } else {
        reducedCart[product._id].quantity += 1;
        reducedCart[product._id].price += product.price
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
      return cart.reduce((total, current) => (
        total.price + current.price
      ))
    }
  }

  const fetchCart = async () => {
    const TEMP_CART_ID = '613f3abe06c475e0525cee9b';
    const response = await fetch(`${ApiUrl}/cart/${TEMP_CART_ID}`);
    const data = await response.json();

    // Update cart information
    cartUpdater(data.products);
  }

  const changeQuantity = async (productId, operation) => {
    const TEMP_CART_ID = '613f3abe06c475e0525cee9b';
    const addOrRemove = operation === 'increment' ? 'add' : 'remove';
    const response = await fetch(`${ApiUrl}/cart/${addOrRemove}/${TEMP_CART_ID}`, {
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
    const response = await fetch(`${ApiUrl}/cart/delete/${TEMP_CART_ID}`, {
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

  return (
    <>
        <CartPageWrapper container direction="column" alignItems="center">
            <MyCartHeader>
              <h2 style={{ fontFamily: 'fantancy' }}>My Cart</h2>
              <img src={mycarticon} alt="mycart" style={{ width: "35px", marginLeft: "4px" }} />
            </MyCartHeader>
            <br />
            <CartWrapper>
              {
                cart.map(product => (
                  <CartCard key={product._id} display="flex" alignItems="center" style={{justifyContent: 'space-between'}}>
                    <img src={product.image} alt={product.name} />
                    <CartText>
                      <Typography variant="h6" style={{ fontFamily:"'Times New Roman', Times, serif"}}>{product.name}</Typography>
                      <Typography variant="h6" align="center" style={{ marginTop: "10px", fontFamily: "'Times New Roman', Times, serif"}}>${product.price.toFixed(2)}</Typography>
                      <div>
                        <button style={{width: "15px", backgroundColor: "white", cursor: "hover"}} onClick={() => changeQuantity(product._id, 'increment')}>+</button>
                        <span>   {product.quantity} </span>
                        {/* decrement currently does not work, therefore button is disabled */}
                        <button disabled={true} style={{width: "15px", backgroundColor: "white", cursor: "not-allowed"}} onClick={() => changeQuantity(product._id, 'decrement')}>-</button>
                      </div>
                    </CartText>
                    <HighlightOffIcon size="20" style={{cursor: 'pointer'}} onClick={() => removeProduct(product._id)} />

                  </CartCard>

                ))
              }
              <br />
              
            </CartWrapper>
          <CheckoutWrapper>
            <br />
            <h2 style={{ textAlign: "left", fontFamily: "'Times New Roman', Times, serif"}}>Total amount</h2>
            <Typography style={{ textAlign: "end", fontSize: "1.3em", marginTop: "25px", fontFamily: "'Times New Roman', Times, serif" }}>Total (inkl. moms):${cartPrice.toFixed(2)}</Typography>
              <Link to="/checkout"><AddtoCartButton style={{ width: '100%', marginTop: '25px', border: "none" }}>Check out</AddtoCartButton></Link>
            </CheckoutWrapper>
        </CartPageWrapper>
      <Footer />
      </>
  )
}

export default MyCart;
