import React from 'react';
import { Link } from 'react-router-dom';
import sportPhoto from '../images/sportblack.png';
import formalPhoto from '../images/highheel.jpeg';
import casualPhoto from '../images/casualblack.png';
import allkinds from '../images/differentkinds.png';
import { CategoryButton, FrontPageWrapper, Photo, PhotoCard } from './FrontPageStyle';

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
}

export default FrontPage
