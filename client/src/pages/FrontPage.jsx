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

    <FrontPageWrapper>
      <h1>Front page</h1>
      <PhotoCard>
        <Photo src={allkinds} alt="formal-shoes" />
        <CategoryButton>
          <Link to="/products" style={{ textDecoration: "none" }}>
            All
          </Link>
        </CategoryButton>
      </PhotoCard>
      <PhotoCard>
        <Photo src={casualPhoto} alt="sport-shoes" />
        <CategoryButton>
          <Link to="/casual" style={{ textDecoration: "none" }}>
            Casual
          </Link>
        </CategoryButton>
      </PhotoCard>
      <PhotoCard>
        <Photo src={sportPhoto} alt="casual-shoes" />
        <CategoryButton>
          <Link to="/sport" style={{ textDecoration: "none" }}>
            Sport
          </Link>
        </CategoryButton>
      </PhotoCard>
      <PhotoCard>
        <Photo src={formalPhoto} alt="formal-shoes" />
        <CategoryButton><Link to="/formal" style={{ textDecoration: "none" }}>
            Formal
          </Link></CategoryButton>
      </PhotoCard>
    </FrontPageWrapper>
  );

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
