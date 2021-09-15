import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/shop.png'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { CategoryButton, FrontPageWrapper, HeaderLinks, HeaderWrapper, Photo, PhotoCard } from '../../pages/FrontPageStyle';

const DefaultHeader = () => {
  return (
    <>
   <HeaderWrapper>
        <Link to="/"><ArrowBackIosIcon style={{marginTop:45,color: 'red',fontSize:35}}></ArrowBackIosIcon></Link>
           
        <img src={logo} alt="logo" style={{ width: '50px', paddingLeft: '10px', paddingTop: '40px' }} />
        <HeaderLinks>
          <Link to="/register" style={{ textDecoration: "none", color:"rgb(58, 7, 2)", fontFamily: 'Roboto',fontSize:'1.1em',paddingTop: '40px' }}>Register</Link>
          <Link to="/login" style={{ textDecoration: "none", color: "rgb(58, 7, 2)", fontFamily: 'Roboto', fontSize: '1.1em',paddingTop: '40px' }}>Sign In</Link>
        </HeaderLinks>
      </HeaderWrapper>
      <br />
    </>
  )
}
export default DefaultHeader