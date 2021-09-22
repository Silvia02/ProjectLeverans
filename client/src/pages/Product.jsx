import React, {useState, useEffect, useContext} from 'react';
import ApiUrlContext from '../ApiUrlContext.js';
import {useParams} from 'react-router-dom'
import {AddtoCartButton, AddtoCartWrapper, ProductDetailButton, ProductDetailCard, ProductDescription, SizeButton, SizeButtonWrapper, ProductLabel, BackButton} from './ProductStyle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ToggleDisplay from 'react-toggle-display';
import Footer from '../components/footer/Footer';

const Product = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);
  const [size, setSize] = useState(null);
  const ApiUrl = useContext(ApiUrlContext);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const response = await fetch(`${ApiUrl}/products/${id}`);
    const data = await response.json();
    console.log(data)
    setProduct(data)
  }

  const addToCart = async () => {
    const userId = JSON.parse(window.localStorage.getItem('MyUser'))._id;
    await fetch(`${ApiUrl}/cart/add/${userId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "productId": product._id,
        "shoeSize": size,
      })
    });
  }


  const addToFavourites = async () => {
    const userId = JSON.parse(window.localStorage.getItem('MyUser'))._id;
    await fetch(`${ApiUrl}/favourites/add/${userId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "productId": product._id
      })
    });
  }

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div>
      <ProductDetailCard>
        <img src={product.image} alt="" style={{width: "100%", marginTop: "10px", marginBottom: "10px"}} />
        <ProductLabel>
          <span>{product.category}</span>
          <span><strong>{product.name}</strong></span>
          <span>{product.price}</span>
        </ProductLabel>

        <SizeButtonWrapper> {/* conditional styling will be added when size matches button */}
          <SizeButton selected={size === 37} onClick={() => setSize(37)}>37</SizeButton>
          <SizeButton selected={size === 38} onClick={() => setSize(38)}>38</SizeButton>
          <SizeButton selected={size === 39} onClick={() => setSize(39)}>39</SizeButton>
          <SizeButton selected={size === 40} onClick={() => setSize(40)}>40</SizeButton>
          <SizeButton selected={size === 41} onClick={() => setSize(41)}>41</SizeButton>
          <SizeButton selected={size === 42} onClick={() => setSize(42)}>42</SizeButton>
          <SizeButton selected={size === 43} onClick={() => setSize(43)}>43</SizeButton>
          <SizeButton selected={size === 44} onClick={() => setSize(44)}>44</SizeButton>
          <SizeButton selected={size === 45} onClick={() => setSize(45)}>45</SizeButton>
          <SizeButton selected={size === 46} onClick={() => setSize(46)}>46</SizeButton>
        </SizeButtonWrapper>

        <div>
          <ProductDetailButton onClick={() => handleClick()}>Product information</ProductDetailButton>
          <ToggleDisplay show={show}>{product.description}</ToggleDisplay>
        </div>
        {/*<BackButton><Link to="/products" style={{textDecoration:"none"}}>Back to check more</Link></BackButton>*/}
        <AddtoCartWrapper>
          <AddtoCartButton disabled={!size} onClick={addToCart}>Add to cart</AddtoCartButton>
          <FavoriteBorderIcon
            style={{width: "45px", height: "50px", marginLeft: "10px", border: "1px solid black"}}
            onClick={addToFavourites}
          />
        </AddtoCartWrapper>
      </ProductDetailCard>
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Product;
