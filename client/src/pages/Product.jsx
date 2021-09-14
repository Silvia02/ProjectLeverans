import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { AddtoCartButton,AddtoCartWrapper,ProductDetailButton, ProductDetailCard, ProductDescription, SizeButton, SizeButtonWrapper, ProductLabel, BackButton } from './ProductStyle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ToggleDisplay from 'react-toggle-display';
import logo from '../images/shop.png'
import { HeaderWrapper } from './FrontPageStyle';
import { BackErrow } from './HomeStyle';

const Product = ({ addToShoppingList,onAdd}) => {
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
      <BackErrow><Link to="/products" style={{ textDecoration: 'none' }}>&#8592;</Link></BackErrow>
      <ProductDetailCard>
        <img src={product.image} alt="" style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }} />
        <ProductLabel>
          <span>{product.category}</span>
          <span><strong>{product.name}</strong></span>
          <span>{product.price}</span>    
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
          <AddtoCartButton
            onClick={() => addToShoppingList(product)}>Add to cart</AddtoCartButton>
          <FavoriteBorderIcon
            style={{ width: "45px", height: "50px", marginLeft: "10px", border: "1px solid black" }}
            onClick={()=>onAdd(product)}
            />
        </AddtoCartWrapper>
      </ProductDetailCard>
    </div>
  )
}

export default Product

