import React, {useState, useEffect, useContext} from 'react';
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

const Casual = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(`/api/products/category/casual`);
      const data = await response.json();

      setCategories(data);
    };

    getItems();
  }, []);

  return (
    <div>

      <ProductWrapper>
        {categories.map((categorie) => (
          <ProductCard key={categorie._id}>
            {/*<FavoriteBorderIcon
                style={{
                  marginLeft: "85%",
                  marginBottom: "-15%",
                  zIndex: "5",
                }}
                onClick={() => onAdd(categorie)}
              />*/}
            <Link to={`/products/${categorie._id}`}>
              <ImageWrapper>
                <img
                  src={categorie.image}
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
              <ProductName>{categorie.name}</ProductName>
              <br />
              <ProductPrice>£{categorie.price}</ProductPrice>
            </ProductInformationWrapper>
          </ProductCard>
        ))}
      </ProductWrapper>
      <Footer />
    </div>
  );
};

export default Casual;
