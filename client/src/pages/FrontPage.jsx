import React from 'react';
import { Link } from 'react-router-dom';
import sportPhoto from '../images/sportblack.png';
import formalPhoto from '../images/highheel.jpeg';
import casualPhoto from '../images/casualblack.png';
import allkinds from '../images/differentkinds.png';
import logo from '../images/shop.png'
import { CategoryButton, FrontPageWrapper, HeaderLinks, HeaderWrapper, Photo, PhotoCard } from './FrontPageStyle';
import Favourites from './Favourites';

const FrontPage = () => {
  return (
    <>
      <HeaderWrapper>
        <img src={logo} alt="logo" style={{ width: '40px', paddingLeft: '10px', paddingTop: '10px' }} />
        <HeaderLinks>
          <Link to="/register" style={{ textDecoration: "none", color:"rgb(58, 7, 2)" }}>Register</Link>
          <Link to="/login" style={{ textDecoration: "none", color: "rgb(58, 7, 2)"  }}>Sign In</Link>
        </HeaderLinks>
      </HeaderWrapper>
      <br/> 
      <FrontPageWrapper>
        <PhotoCard>
          <Photo src={allkinds} alt="formal-shoes" />
          <CategoryButton><Link to="/products" style={{textDecoration:"none"}}>All</Link></CategoryButton>
        </PhotoCard>
        <PhotoCard>
          <Photo src={sportPhoto} alt="sport-shoes" />
          <CategoryButton>Sport</CategoryButton>
        </PhotoCard>
        <PhotoCard>
          <Photo src={casualPhoto} alt="casual-shoes" />
          <CategoryButton>Casual</CategoryButton>
        </PhotoCard>
        <PhotoCard>
          <Photo src={formalPhoto} alt="formal-shoes" />
          <CategoryButton>Formal</CategoryButton>
        </PhotoCard>
      </FrontPageWrapper>
    </>
  )
}

export default FrontPage
