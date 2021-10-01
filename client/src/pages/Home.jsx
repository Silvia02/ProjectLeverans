import React, {useState, useEffect, useContext} from 'react';
import ApiUrlContext from '../ApiUrlContext.js';
import {Link} from 'react-router-dom';
import {ProductCard, ProductPrice, ProductName, ProductWrapper, ImageWrapper, ProductInformationWrapper, } from './HomeStyle';
import Footer from '../components/footer/Footer';

const Home = ( ) => {
  const ApiUrl = useContext(ApiUrlContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await fetch(`${ApiUrl}/products`);
    const data = await response.json();
    setProducts(data);
  };

  return (
    <>
      <ProductWrapper>
        {products.map((product) => (
          <ProductCard key={product._id}>
            {/* <FavoriteBorderIcon
              style={{ marginLeft: '85%', marginBottom: '-15%', zIndex: '5' }}
              onClick={() => onAdd(product)}
            />*/}
            <Link to={`/products/${product._id}`}>
              <ImageWrapper>
                <img
                  src={product.image}
                  alt="shoes"
                  style={{ width: "100%", height: "90%", objectFit: "cover",marginLeft:'0px', marginTop:'0px' }}
                />
              </ImageWrapper>
            </Link>
            <ProductInformationWrapper>
              <ProductName>{product.name}</ProductName>
              <br />
              <ProductPrice>£{product.price}</ProductPrice>
            </ProductInformationWrapper>
            {/*<p>{product.description}</p>*/}
          </ProductCard>
        ))}
      </ProductWrapper>
      <Footer />
    </>
  );
};

export default Home
