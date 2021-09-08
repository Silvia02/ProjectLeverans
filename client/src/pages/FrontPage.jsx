import React from 'react';
import sportPhoto from '../images/sport.png';
import formalPhoto from '../images/formal.jpeg';
import casualPhoto from '../images/casual.jpeg';
import allkinds from '../images/shoesstore.jpeg';
import { CategoryButton, FrontPageWrapper, Photo, PhotoCard } from './FrontPageStyle';

const FrontPage = () => {
  return (
    <FrontPageWrapper>
      <h1>Front page</h1>
      <PhotoCard>
        <Photo src={allkinds} alt="formal-shoes" />
        <CategoryButton>All</CategoryButton>
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

export default FrontPage
