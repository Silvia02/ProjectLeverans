import React, {useState, useEffect, useContext} from 'react';
import ApiUrlContext from '../ApiUrlContext.js';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom';
import {AddtoCartButton, AddtoCartWrapper, ProductDetailButton, ProductDetailCard, ProductDescription, SizeButton, SizeButtonWrapper, ProductLabel, BackButton, ProductImgDetail, ProductTextWrapper} from './ProductStyle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ToggleDisplay from 'react-toggle-display';
import logo from '../images/shop.png'
import { HeaderWrapper } from './FrontPageStyle';
import Footer from '../components/footer/Footer';

const Product = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);
  const ApiUrl = useContext(ApiUrlContext);
  const [favouritesAmount, setFavouritesAmount] = useState(0);
  const [myCartAmount, setMyCartAmount] = useState(0)

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const response = await fetch(`${ApiUrl}/products/${id}`);
    const data = await response.json();
    setProduct(data);
  }

  const addToCart = async () => {
    const TEMP_CART_ID = '613f3abe06c475e0525cee9b';
    await fetch(`${ApiUrl}/cart/add/${TEMP_CART_ID}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "productId": product._id
      })
    });
    const response = await fetch(`${ApiUrl}/cart/${TEMP_CART_ID}`);
    const data = await response.json();
    setMyCartAmount(data.products.length);
  }


  const addToFavourites = async () => {
    const TEMP_WISHLIST_ID = '6142f237423da20abed34513';
    await fetch(`${ApiUrl}/favourites/add/${TEMP_WISHLIST_ID}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "productId": product._id
      })
    });
    const response = await fetch(`${ApiUrl}/favourites/${TEMP_WISHLIST_ID}`);
    const data = await response.json();
    setFavouritesAmount(data.products.length)
  }
 
  const handleClick = () => {
    setShow(!show)
  }

  return (
    <>
    <ProductDetailCard>
      <ProductImgDetail src={product.image} alt="" />
      <ProductTextWrapper>
        <ProductLabel>
          <span>{product.category}</span>
          <span><strong>{product.name}</strong></span>
          <span>${product.price}</span>
        </ProductLabel>
        <SizeButtonWrapper>
          <SizeButton>37</SizeButton>
          <SizeButton>38</SizeButton>
          <SizeButton>39</SizeButton>
          <SizeButton>40</SizeButton>
          <SizeButton>41</SizeButton>
          <SizeButton>42</SizeButton>
          <SizeButton>43</SizeButton>
          <SizeButton>44</SizeButton>
          <SizeButton>45</SizeButton>
          <SizeButton>46</SizeButton>
        </SizeButtonWrapper>
        <div>
          <ProductDetailButton onClick={() => handleClick()}>Product information</ProductDetailButton>
            <ToggleDisplay show={show}>{product.description}</ToggleDisplay>
        </div>
        {/*<BackButton><Link to="/products" style={{textDecoration:"none"}}>Back to check more</Link></BackButton>*/}
        <AddtoCartWrapper>
          <AddtoCartButton onClick={addToCart}>Add to cart</AddtoCartButton>
          <FavoriteBorderIcon
            style={{width: "45px", height: "50px", marginLeft: "10px", border: "1px solid black", cursor:"pointer"}}
            onClick={addToFavourites}
          />
          </AddtoCartWrapper>
      </ProductTextWrapper>
    </ProductDetailCard>
      <br />
      <br />
      <Footer
        favouritesAmount={favouritesAmount}
        myCartAmount={myCartAmount}
        />
    </>
  )
}

export default Product;
