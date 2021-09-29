import React, {useState, useEffect, useContext} from 'react';
import ApiUrlContext from '../ApiUrlContext.js';
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
  const ApiUrl = useContext(ApiUrlContext);
  const [formals, setFormals] = useState([]);

  //console.log(formals);
  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(`${ApiUrl}/products/category/formal`);
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
            {/* <FavoriteBorderIcon
              style={{
                marginLeft: "85%",
                marginBottom: "-15%",
                zIndex: "5",
              }}
              onClick={() => onAdd(formalCate)}
            />*/}
            <Link to={`/products/${formalCate._id}`}>
              <ImageWrapper>
                <img
                  src={formalCate.image}
                  alt="shoes"
                  style={{
                    width: "100%",
                    height: "90%",
                    objectFit: "cover",
                  }}
                />
              </ImageWrapper>
            </Link>
            <ProductInformationWrapper>
              <ProductName>{formalCate.name}</ProductName>
              <br />
              <ProductPrice>${formalCate.price}</ProductPrice>
            </ProductInformationWrapper>
          </ProductCard>
        ))}
      </ProductWrapper>
      <Footer />
    </div>
  );
};

export default Formal;
