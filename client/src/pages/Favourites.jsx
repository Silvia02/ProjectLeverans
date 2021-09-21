import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ApiUrlContext from '../ApiUrlContext.js';
import favouriteImg from '../images/heart.png';
import {
  Grid,
  Typography,
  Paper,
  Box,
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { FavouritesWraper, FavouritesLists, FavouriteCard, FavouriteImg, FavouriteHeader } from './FavouritesStyle';

const Favourites = () => {
  const paperStyle = {
    padding: 20,
    width: 320,
    height: 'auto',
    margin: '25px'
  }

  const ApiUrl = useContext(ApiUrlContext);
  const [favourites, setFavourites] = useState([]);
  // const [showAddToCartMessage, setShowAddToCartMessage] = useState(false); // to be added in sprint 2

  useEffect(() => {
    fetchFavourites();
    // setShowAddToCartMessage(false);
  }, [])


  const fetchFavourites = async () => {
    const TEMP_WISHLIST_ID = '6142f237423da20abed34513';
    const response = await fetch(`${ApiUrl}/favourites/${TEMP_WISHLIST_ID}`);
    const data = await response.json();

    setFavourites(data.products);
  }

  const removeProduct = async (productId) => {
    const TEMP_WISHLIST_ID = '6142f237423da20abed34513';
    const response = await fetch(`${ApiUrl}/favourites/remove/${TEMP_WISHLIST_ID}`, {
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
    setFavourites(data.products);
  }

  // // Not fully working, will fix next sprint
  // const addFavouritesToCart = async () => {
  //   const TEMP_CART_ID = '613f3abe06c475e0525cee9b';
  //   await fetch(`${ApiUrl}/favourites/addToCart`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "favourites": favourites,
  //       "cartId": TEMP_CART_ID
  //     })
  //   });

  //   setShowAddToCartMessage(true);
  // }

  return (
    <div>
      <FavouriteHeader>
        <img src={favouriteImg} alt="favourite" style={{ width: "55px", marginRight:"10px" }} />
        <h1 style={{ fontFamily: 'fantancy' }}>Favourites</h1>  
      </FavouriteHeader>
      <FavouritesWraper>
        {favourites.length ? (
          <FavouritesLists>
            {
              favourites.map(product => (
                <FavouriteCard key={product._id} display="flex" paddingY="5px" alignItems="center" style={{justifyContent: 'space-between'}}>
                  <FavouriteImg src={product.image} alt={product.name} />
                  <div style={{ paddingTop: '20%' }}>
                    <Typography variant="h7" >{product.name}</Typography>
                    <br />
                    <br />
                    <Typography variant="h7" style={{ marginTop: '20%' }}>${product.price}</Typography>
                  </div>
                  <HighlightOffIcon size="20" style={{cursor: 'pointer'}} onClick={() => removeProduct(product._id)} />
                </FavouriteCard>
              ))
            }
          </FavouritesLists>
        ) : null}
        {/* To be added next sprint
        {<button style={{whiteSpace: "nowrap"}} onClick={addFavouritesToCart}>Add all to cart</button>
          showAddToCartMessage ? <p style={{margin: 0, color: '#555'}}>Added {favourites.length} item(s) to your cart</p> : null
        } */}
      </FavouritesWraper>
    </div>
  )
}

export default Favourites;
