import React from 'react';
import { Link } from 'react-router-dom';
import sportPhoto from '../images/sportblack.png';
import formalPhoto from '../images/highheel.jpeg';
import casualPhoto from '../images/casualblack.png';
import allkinds from '../images/differentkinds.png';
import logo from '../images/shop.png'
import { CategoryButton, FrontPageWrapper, HeaderLinks, HeaderWrapper, Photo, PhotoCard } from './FrontPageStyle';
import Favourites from './Favourites';
import Footer from '../components/footer/Footer';

const FrontPage = () => {
  return (
<>
     <HeaderWrapper>
        <img src={logo} alt="logo" style={{ width: '40px', paddingLeft: '10px', paddingTop: '10px' }} />
        <HeaderLinks>
          <Link to="/register" style={{ textDecoration: "none", color:"rgb(58, 7, 2)", fontFamily: 'Roboto',fontSize:'1.1em'}}>Register</Link>
          <Link to="/login" style={{ textDecoration: "none", color: "rgb(58, 7, 2)", fontFamily: 'Roboto', fontSize: '1.1em'}}>Sign In</Link>
        </HeaderLinks>
      </HeaderWrapper>
      <br />
      <FrontPageWrapper>
          <PhotoCard>
            <Photo src={allkinds} alt="formal-shoes" />
            <CategoryButton>
            <Link to="/products" style={{ textDecoration: "none", fontSize: "1em", fontFamily: 'Roboto' }}>
                All
              </Link>
            </CategoryButton>
          </PhotoCard>
          <PhotoCard>
            <Photo src={casualPhoto} alt="sport-shoes" />
            <CategoryButton>
            <Link to="/casual" style={{ textDecoration: "none", fontSize: "1em", fontFamily: 'Roboto'}}>
                Casual
              </Link>
            </CategoryButton>
          </PhotoCard>
          <PhotoCard>
            <Photo src={sportPhoto} alt="casual-shoes" />
            <CategoryButton>
            <Link to="/sport" style={{ textDecoration: "none", fontSize: "1em", fontFamily: 'Roboto' }}>
                Sport
              </Link>
            </CategoryButton>
          </PhotoCard>
          <PhotoCard>
            <Photo src={formalPhoto} alt="formal-shoes" />
          <CategoryButton><Link to="/formal" style={{ textDecoration: "none", fontSize: "1em", fontFamily: 'Roboto'}}>
                Formal
              </Link></CategoryButton>
          </PhotoCard>
        </FrontPageWrapper>
      </>
      
    )
  
}



export default FrontPage
