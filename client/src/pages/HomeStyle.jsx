import styled from "styled-components";

export const BackArrow = styled.p`
  width:60px;
  height:40px;
  font-size:2.5em;
  margin-top:5px;
  margin-left: 0px;
  padding-left: 10px;
  padding-right: 5px;
  padding-bottom: 5px;
  border-bottom:1px solid grey;
  border-right: 1px solid grey;
  cursor: pointer;
`
export const ProductWrapper = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  width:100%;
  margin-left: 5%;
  margin-top:10px;
  margin-bottom:60px;
  @media (min-width: 1023px) {
    margin-left: 10%;
  }
  `
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 5px;
  padding: 5px;
  background-color: whitesmoke;
  width:45%;
   @media (min-width: 1023px) {
    display:flex;
    flex-direction: column;
    width:20%;
  }
 
`
export const ImageWrapper = styled.div`
  height: 100%;
  margin-bottom: 0%;
  cursor: pointer;
   @media (min-width: 1023px) {
    width:100%;
    height:100%;
    object-fit: fit;
  }
`

export const ProductInformationWrapper = styled.div`
  height:50px;
  width:100%;
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-size: 1em;
  text-align: center;
  justify-content: center;
  padding-bottom: 10px;
  @media (min-width: 1023px) {
    margin-bottom: 10px;
  }
`

export const ProductPrice = styled.span`
 
`
export const ProductName = styled.span`
 
`

