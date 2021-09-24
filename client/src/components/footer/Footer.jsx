import React from 'react';
import logo from '../../images/shop.png';
import { Link } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { FooterWrapper} from './FooterStyle';
import { Badge } from '@material-ui/core';

const Footer = ({favouritesAmount, myCartAmount}) => {
  return (
    <FooterWrapper>
      <Link to="/"><img src={logo} alt="logo" style={{ width: '30px', height: "45px", paddingTop: "10px" }} /></Link>
      <Link to="/favourites">
        <Badge badgeContent={favouritesAmount} color="secondary" style={{zIndex:100}}>
          <FavoriteBorderOutlinedIcon style={{ width: '42px', height: "50px", paddingTop: "10px", color: "black" }} />
        </Badge>
      </Link>
     
      <Link to="/mycart">
        <Badge badgeContent={myCartAmount} color="secondary">
            <ShoppingCartOutlinedIcon style={{ width: '42px', height: "50px", paddingTop: "10px", color: "black" }} />
        </Badge>
       </Link>
    </FooterWrapper>
  )
}

export default Footer
