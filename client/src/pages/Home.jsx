import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../../server/controllers/products';
import { ProductCard, ProductPrice, ProductWrapper } from './HomeStyle';


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
        {
          products.map(product => 
            <ProductCard key={product._id}>
              <img src={product.image} alt="shoes" style={{ width: '100%'}}/>
              <ProductPrice>{product.name}</ProductPrice>
              <p>{product.price}</p>
              {/*<p>{product.description}</p>*/}
          </ProductCard>
          )
        }
        </ProductWrapper>
    </>
  )
}

export default Home
