import React from 'react';
import sportPhoto from '../images/sport.png';
import formalPhoto from '../images/formal.jpeg';
import casualPhoto from '../images/casual.jpeg';
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
  )
}

export default FrontPage; 