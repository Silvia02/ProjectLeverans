import React from 'react';
import logo from '../../images/shop.png';
import { Link } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { FooterWrapper, ItemsNumber } from './FooterStyle';

const Footer = () => {
  return (
    <FooterWrapper>
      <Link to="/"><img src={logo} alt="logo" style={{ width: '30px', height: "45px", paddingTop: "10px" }} /></Link>
      <Link to="/favourites"><FavoriteBorderOutlinedIcon style={{ width: '42px', height: "50px", paddingTop: "10px", color:"black" }} /></Link>
      {/*<ItemsNumber>0</ItemsNumber>*/ } 
      <Link to="/mycart"><ShoppingCartOutlinedIcon style={{ width: '42px', height: "50px", paddingTop: "10px", color: "black" }} /></Link>
    </FooterWrapper>
  )
}

export default Footer
