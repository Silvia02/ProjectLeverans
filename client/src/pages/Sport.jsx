import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import {
  ProductCard,
  ProductPrice,
  ProductName,
  ProductWrapper,
  ImageWrapper,
  ProductInformationWrapper,
} from "./HomeStyle";

const fetchURLsport = "http://localhost:4000/products/category/sport";
const getItemsSport = () => fetch(fetchURLsport).then((res) => res.json());

const Sport = () => {
  const [sports, setSports] = useState([]);

  console.log(sports);

  useEffect(() => {
    getItemsSport().then((data) => setSports(data));
  }, []);

  return (
    <div>
      <h1>Hello from Sport</h1>
      <ProductWrapper>
        {sports.map((sportCate) => (
          <ProductCard key={sportCate._id}>
            <FavoriteBorderIcon
              style={{
                marginLeft: "85%",
                marginBottom: "-15%",
                zIndex: "5",
              }}
              onClick={() => onAdd(sportCate)}
            />
            <Link to={`/products/${sportCate._id}`}>
              <ImageWrapper>
                <img
                  src={sportCate.image}
                  alt="shoes"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </ImageWrapper>
            </Link>
            <ProductInformationWrapper>
              <ProductName>{sportCate.name}</ProductName>
              <br />
              <ProductPrice>{sportCate.price}</ProductPrice>
            </ProductInformationWrapper>
          </ProductCard>
        ))}
      </ProductWrapper>
    </div>
  );
};

export default Sport;
