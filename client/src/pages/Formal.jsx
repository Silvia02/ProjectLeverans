import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Footer from '../components/footer/Footer';

import {
  ProductCard,
  ProductPrice,
  ProductName,
  ProductWrapper,
  ImageWrapper,
  ProductInformationWrapper,
} from "./HomeStyle";

const Formal = () => {
  const [formals, setFormals] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(`/api/products/category/formal`);
      const data = await response.json();

      setFormals(data);
    };

    getItems();
  }, []);

  return (
    <div>
      <ProductWrapper>
        {formals.map((formalCate) => (
          <ProductCard key={formalCate._id}>
            <Link to={`/products/${formalCate._id}`}>
              <ImageWrapper>
                <img
                  src={formalCate.image}
                  alt="shoes"
                  style={{
                    width: "100%",
                    height: "90%",
                    objectFit: "cover",
                    marginLeft: '0px',
                    marginTop: '0px'
                  }}
                />
              </ImageWrapper>
            </Link>
            <ProductInformationWrapper>
              <ProductName>{formalCate.name}</ProductName>
              <br />
              <ProductPrice>£{formalCate.price}</ProductPrice>
            </ProductInformationWrapper>
          </ProductCard>
        ))}
      </ProductWrapper>
      <Footer />
    </div>
  );
};

export default Formal;
