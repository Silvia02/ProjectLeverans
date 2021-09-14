import React, { useState, useEffect } from 'react';
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

const fetchURL = 'http://localhost:4000/products/category/casual';
const getItems = () => fetch(fetchURL).then((res) => res.json());

const Casual = () => {
    const [categories, setCategories] = useState([])

    // console.log(categories);
    useEffect(() => {
        getItems().then((data) => setCategories(data));
      
     
    }, [])
   
    return (
        <div>
            <h1>Hello from casual</h1>
        <ProductWrapper>
          {categories.map((categorie) => (
            <ProductCard key={categorie._id}>
              <FavoriteBorderIcon
                style={{
                  marginLeft: "85%",
                  marginBottom: "-15%",
                  zIndex: "5",
                }}
                onClick={() => onAdd(categorie)}
              />
              <Link to={`/products/${categorie._id}`}>
                <ImageWrapper>
                  <img
                    src={categorie.image}
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
                <ProductName>{categorie.name}</ProductName>
                <br />
                <ProductPrice>{categorie.price}</ProductPrice>
           
              </ProductInformationWrapper>
            </ProductCard>
          ))}
        </ProductWrapper>
      </div>
    );

}

export default Casual;