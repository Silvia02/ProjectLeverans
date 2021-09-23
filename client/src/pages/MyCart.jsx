import React, {useState, useEffect, useContext} from 'react';
import ApiUrlContext from '../ApiUrlContext.js';
import '../css/mycart.css'
import {AddtoCartButton} from '../pages/ProductStyle'
import {Link} from 'react-router-dom'
import {Typography} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {CartPageWrapper, CartCard, CartText, CartWrapper, CheckoutWrapper, MyCartHeader} from './MyCartStyle.jsx';
import mycarticon from '../images/mycart.jpeg';
import Footer from '../components/footer/Footer.jsx';

const MyCart = () => {

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

  const removeProduct = async (index) => {
    const userId = JSON.parse(window.localStorage.getItem('MyUser'))._id;
    const response = await fetch(`${ApiUrl}/cart/remove/${userId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({index})
    });
    const data = await response.json();
    cartUpdater(data);
  }

  return (
    <>
      <CartPageWrapper container direction="column" alignItems="center">
        <MyCartHeader>
          <h2 style={{fontFamily: 'fantancy'}}>My Cart</h2>
          <img src={mycarticon} alt="mycart" style={{width: "35px", marginLeft: "4px"}} />
        </MyCartHeader>
        <br />
        <CartWrapper>
          {
            cart.map((product, index) => (
              <CartCard key={product._id + Math.random()} display="flex" alignItems="center" style={{justifyContent: 'space-between'}}>
                <img src={product.image} alt={product.name} />
                <CartText>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="h6" align="center" style={{marginTop: "10px"}}>${product.price.toFixed(2)}</Typography>
                  <div>
                    <span>EU {product.size}</span>
                  </div>
                </CartText>
                <HighlightOffIcon size="20" style={{cursor: 'pointer'}} onClick={() => removeProduct(index)} />
              </CartCard>
            ))
          }
          <br />
        </CartWrapper>
        <CheckoutWrapper>
          <br />
          <h2 style={{textAlign: "left", fontFamily: "'Times New Roman', Times, serif"}}>Total amount</h2>
          <Typography style={{textAlign: "end", fontSize: "1.3em", marginTop: "25px", fontFamily: "'Times New Roman', Times, serif"}}>Total (inkl. moms):${cartPrice.toFixed(2)}</Typography>
          <Link to="/checkout"><AddtoCartButton style={{width: '100%', marginTop: '25px', border: "none", marginBottom: '72px'}}>Check out</AddtoCartButton></Link>
        </CheckoutWrapper>
      </CartPageWrapper>
      <Footer />
    </>
  )
}

export default MyCart;
