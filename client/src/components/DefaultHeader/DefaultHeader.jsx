import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/shop.png'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { CategoryButton, FrontPageWrapper, HeaderLinks, HeaderWrapper, Photo, PhotoCard } from '../../pages/FrontPageStyle';

const DefaultHeader = ({ stayLogedin }) => {

  return (
    <>
      <HeaderWrapper>
        {stayLogedin ? (
          <Link to="/">
            <ArrowBackIosIcon
              style={{
                marginTop: 45,
                color: "red",
                fontSize: 35,
                marginLeft: 40,
              }}
            ></ArrowBackIosIcon>
          </Link>
        ) : null}
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{
                // width: "50px",
                // paddingLeft: "10px",
                // paddingTop: "40px",
                marginTop: 10,
                marginLeft: 40,
             
              }}
            />
          </Link>
        </div>
        <HeaderLinks>
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              color: "rgb(58, 7, 2)",
              fontFamily: "Roboto",
              fontSize: "1.1em",
              paddingTop: "40px",
              marginRight: 60,
            }}
          >
            Register
          </Link>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "rgb(58, 7, 2)",
              fontFamily: "Roboto",
              fontSize: "1.1em",
              paddingTop: "40px",
              marginRight: 200,
            }}
          >
            Sign In
          </Link>
        </HeaderLinks>
      </HeaderWrapper>
      <br />
    </>
  );
};
export default DefaultHeader