import React, {useState, useEffect, useContext} from 'react';
import ApiUrlContext from '../ApiUrlContext.js';
import {Link} from "react-router-dom";
import Footer from '../components/footer/Footer'
import {
  ProductCard,
  ProductPrice,
  ProductName,
  ProductWrapper,
  ImageWrapper,
  ProductInformationWrapper,
} from "./HomeStyle";

const Sport = () => {
  const ApiUrl = useContext(ApiUrlContext);
  const [sports, setSports] = useState([]);

  console.log(sports);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(`${ApiUrl}/products/category/sport`);
      const data = await response.json();

      setSports(data)
    }

    getItems();
  }, []);

  return (
    <div>
      <ProductWrapper>
        {sports.map((sportCate) => (
          <ProductCard key={sportCate._id}>
            {/* <FavoriteBorderIcon
              style={{
                marginLeft: "85%",
                marginBottom: "-15%",
                zIndex: "5",
              }}
              onClick={() => onAdd(sportCate)}
            />*/}
            <Link to={`/products/${sportCate._id}`}>
              <ImageWrapper>
                <img
                  src={sportCate.image}
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
              <ProductName>{sportCate.name}</ProductName>
              <br />
              <ProductPrice>${sportCate.price}</ProductPrice>
            </ProductInformationWrapper>
          </ProductCard>
        ))}
      </ProductWrapper>
      <Footer />
    </div>
  );
};

export default Sport;
