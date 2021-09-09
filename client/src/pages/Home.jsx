import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../../server/controllers/products';
import { ProductCard, ProductPrice, ProductName, ProductWrapper } from './HomeStyle';
import Product from './Product';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



const Home = () => {
  const [products, setProducts] = useState([ ]);
  const [users, setUsers] = [];
  useEffect(() => {
    getAllProducts();
  }, [ ])

  const getAllProducts=async ()=>{ 
    const response = await fetch('http://localhost:4000/products');
    const data = await response.json();
    console.log(data);
    setProducts(data);
    console.log(products);
  }

  return (
    <>
      <h1>Home page</h1>
      <hr/>
      <ProductWrapper>
        {products.map(product => 
            <ProductCard key={product._id}>
              <FavoriteBorderIcon style={{ marginLeft: '85%', marginBottom: '-15%', zIndex: '5' }} />
              <img src={product.image} alt="shoes" style={{ width: '100%' }} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              {/*<p>{product.description}</p>*/}
            </ProductCard>
          )} 
      </ProductWrapper>
    </>
  )
}

export default Home
