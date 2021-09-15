import React, {useState, useEffect} from 'react'
import {
  Grid,
  Typography,
  Paper,
  Box,
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Favourites = () => {
  const paperStyle = {
    padding: 20,
    width: 320,
    height: 'auto',
    margin: '25px'
  }

  const [wishlist, setWishlist] = useState([]);
  const [showAddToCartMessage, setShowAddToCartMessage] = useState(false);

  useEffect(() => {
    fetchWishlist();
    setShowAddToCartMessage(false);
  }, [])


  const fetchWishlist = async () => {
    const TEMP_WISHLIST_ID = '6141e4728806a06ba7bfc49d';
    const response = await fetch(`http://localhost:4000/wishlist/${TEMP_WISHLIST_ID}`);
    const data = await response.json();

    setWishlist(data.products);
  }

  const removeProduct = async (productId) => {
    const TEMP_WISHLIST_ID = '6141e4728806a06ba7bfc49d';
    const response = await fetch(`http://localhost:4000/wishlist/remove/${TEMP_WISHLIST_ID}`, {
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
    setWishlist(data.products);
  }

  const addWishlistToCart = async () => {
    const TEMP_CART_ID = '613f3abe06c475e0525cee9b';
    await fetch('http://localhost:4000/wishlist/addToCart', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "wishlist": wishlist,
        "cartId": TEMP_CART_ID
      })
    });

    setShowAddToCartMessage(true);
  }

  return (
    <div>
      <h1>Favourites page</h1>
      <Grid container direction="column" alignItems="center">
        <Paper elevation={10} style={paperStyle}>
          {
            wishlist.map(product => (
              <Box key={product._id} display="flex" paddingY="5px" alignItems="center" style={{justifyContent: 'space-between'}}>
                <img src={product.image} alt={product.name} />
                <Typography variant="h6">{product.name}</Typography>
                <HighlightOffIcon size="20" style={{cursor: 'pointer'}} onClick={() => removeProduct(product._id)} />
              </Box>
            ))
          }
        </Paper>
        <button style={{whiteSpace: "nowrap"}} onClick={addWishlistToCart}>Add all to cart</button>
        {
          showAddToCartMessage ? <p style={{margin: 0, color: '#555'}}>Added {wishlist.length} item(s) to your cart</p> : null
        }
      </Grid>
    </div>
  )
}

// <p>{favourites.length}</p>
// <div>
// {favourites.length === 0 && <div>Favourites list is empty</div>}
// {favourites.map(favourite => (
//   <div key={favourite._id}>
//     <div>{favourite.name}</div>
//     <div>
//       <button onClick={() => onAdd(favourite)}>+</button>
//       <button onClick={() => onRemove(favourite)}>-</button>
//     </div>
//     <div>
//       <img src={favourite.image} alt="" />
//       <p>{favourite.name}</p>
//       <span>{favourite.quantity} x ${favourite.price.toFixed(2)}</span>
//     console.log(favourite)
//   </div>
//   </div>
// ))}
// </div>

export default Favourites;
