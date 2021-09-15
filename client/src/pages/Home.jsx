import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../../server/controllers/products';
import { ProductCard, ProductPrice, ProductName, ProductWrapper, ImageWrapper, ProductInformationWrapper, BackArrow } from './HomeStyle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';


const Home = ({onAdd, setUserLogin}) => {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = [];
  
  useEffect(() => {
    getAllProducts();
  }, [])

  const getAllProducts = async () => {
    const response = await fetch('http://localhost:4000/products');
    const data = await response.json();
    console.log(data);
    setProducts(data);
    console.log(products);
  }

  return (
    <>
      <h1>The Shoe Shop</h1>
      <Header setUserLogin={setUserLogin}/>
      <hr />
      <BackArrow><Link to="/" style={{textDecoration:'none'}}>&#8592;</Link></BackArrow>
      <ProductWrapper>
        {products.map(product =>
          <ProductCard key={product._id}>
            <FavoriteBorderIcon
              style={{ marginLeft: '85%', marginBottom: '-15%', zIndex: '5' }}
              onClick={() => onAdd(product)}
            />
            <Link to={`/products/${product._id}`}>
              <ImageWrapper>
                <img src={product.image} alt="shoes" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              </ImageWrapper>
            </Link>
            <ProductInformationWrapper>
              <ProductName>{product.name}</ProductName>
              <br />
              <ProductPrice>{product.price}</ProductPrice>
            </ProductInformationWrapper>
            {/*<p>{product.description}</p>*/}
           
          </ProductCard>
          
        )}
      </ProductWrapper>
      <Footer />
    </>
  )
}
  export default Home
