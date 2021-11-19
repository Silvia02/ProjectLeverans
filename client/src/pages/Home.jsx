import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ProductCard, ProductPrice, ProductName, ProductWrapper, ImageWrapper, ProductInformationWrapper, } from './HomeStyle';
import Footer from '../components/footer/Footer';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    setProducts(data);
  };

  return (
    <>
      <ProductWrapper>
        {products.map((product) => (
          <ProductCard key={product._id}>
            <Link to={`/products/${product._id}`}>
              <ImageWrapper>
                <img
                  src={product.image}
                  alt="shoes"
                  style={{width: "100%", height: "90%", objectFit: "cover", marginLeft: '0px', marginTop: '0px'}}
                />
              </ImageWrapper>
            </Link>
            <ProductInformationWrapper>
              <ProductName>{product.name}</ProductName>
              <br />
              <ProductPrice>£{product.price}</ProductPrice>
            </ProductInformationWrapper>
          </ProductCard>
        ))}
      </ProductWrapper>
      <Footer />
    </>
  );
};

export default Home
