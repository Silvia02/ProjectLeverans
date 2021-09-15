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
import DefaultHeader from '../components/DefaultHeader/DefaultHeader';

const FrontPage = () => {
  return (
<>
     <DefaultHeader/>
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
