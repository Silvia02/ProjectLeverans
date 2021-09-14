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

const fetchURL = "http://localhost:4000/products/category/formal";
const getItems = () => fetch(fetchURL).then((res) => res.json());

const Formal = () => {
  const [formals, setFormals] = useState([]);

  //console.log(formals);

  useEffect(() => {
    getItems().then((data) => setFormals(data));
  }, []);

  return (
    <div>
      <h1>Hello from Formal</h1>
      <ProductWrapper>
        {formals.map((formalCate) => (
          <ProductCard key={formalCate._id}>
            <FavoriteBorderIcon
              style={{
                marginLeft: "85%",
                marginBottom: "-15%",
                zIndex: "5",
              }}
              onClick={() => onAdd(formalCate)}
            />
            <Link to={`/products/${formalCate._id}`}>
              <ImageWrapper>
                <img
                  src={formalCate.image}
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
              <ProductName>{formalCate.name}</ProductName>
              <br />
              <ProductPrice>{formalCate.price}</ProductPrice>
            </ProductInformationWrapper>
          </ProductCard>
        ))}
      </ProductWrapper>
    </div>
  );
};

export default Formal;