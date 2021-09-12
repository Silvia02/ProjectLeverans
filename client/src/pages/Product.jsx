import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { AddtoCartButton,AddtoCartWrapper,ProductDetailButton, ProductDetailCard, ProductDescription, SizeButton, SizeButtonWrapper, ProductLabel } from './ProductStyle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ToggleDisplay from 'react-toggle-display';

const Product = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => { 
    const response = await fetch(`http://localhost:4000/products/${id}`);
    const data = await response.json();
    console.log(data)
    setProduct(data)
  }
  const handleClick = () => { 
    setShow(!show)
  }
  return (
    <div>
      <h1>Product details</h1>
      <ProductDetailCard>
        <img src={product.image} alt="" style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }} />
        <ProductLabel>
          <span>{product.name}</span>
          <span>{product.price}</span>
          <span>{product.category}</span>
        </ProductLabel>
        <SizeButtonWrapper>
          <SizeButton>36</SizeButton>
          <SizeButton>37</SizeButton>
          <SizeButton>38</SizeButton>
          <SizeButton>39</SizeButton>
          <SizeButton>40</SizeButton>
          <SizeButton>41</SizeButton>
          <SizeButton>42</SizeButton>
          <SizeButton>43</SizeButton>
          <SizeButton>44</SizeButton>
          <SizeButton>45</SizeButton>
        </SizeButtonWrapper>
        
        <div>
          <ProductDetailButton onClick={() => handleClick()}>Product information</ProductDetailButton>
          <ToggleDisplay show={show}>{product.description}</ToggleDisplay>
        </div>
        <AddtoCartWrapper>
          <AddtoCartButton>Add to cart</AddtoCartButton>
          <FavoriteBorderIcon style={{width:"40px", height:"40px", marginLeft:"10px", border:"1px solid black"}}/>
        </AddtoCartWrapper>
      </ProductDetailCard>
    </div>
  )
}

export default Product

