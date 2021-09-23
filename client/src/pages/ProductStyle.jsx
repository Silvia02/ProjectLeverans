import styled from 'styled-components'

export const ProductDetailCard = styled.div`
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  width:80%;
  margin-left:10%;
   @media (min-width: 1023px) {
    display:flex;
    flex-direction: row;
    width:80%;
    margin-left:10%;
    margin-top: 5%;
   }
   @media (min-width: 1024px){
     flex-direction: row;
     width:100%;
     margin-left: 0%;
     margin-top: 2%;
   }

`

export const ProductImgDetail = styled.img`
  width:100%;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (min-width: 768px){
    width:60%;
    margin-left: 20%;
  }
  @media (min-width: 1024.9px){
    width:23%;
    margin-left: 20%;
    margin-right: -15%;
  }
 
`

export const ProductTextWrapper = styled.div`
  margin-top: 10px;
  @media (min-width: 768px){
    width:60%;
    margin-left: 20%;
  }
  @media (min-width: 1023px) {
    width:60%;
    margin-left:20%;
    margin-top: 8%;
    display:flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 1024.9px){
    width:32%;
    margin-top: 2%;

  }

`
export const ProductLabel = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1em;
  justify-content: space-around;
  margin-bottom: 10px;
  @media (min-width: 1023px) {
   font-size: 1.3em;
  }
`
export const ProductDetailButton = styled.button`
  width:100%;
  height: 50px;;
  border-radius:0px;
  margin-left: 1%;
  margin-bottom: 15px;
  background-color: whitesmoke;
  text-align: center;
  justify-content: center;
   @media (min-width: 1023px) {
   font-size: 1.3em;
  }
`
export const ProductDescription = styled.p`
  display: none;
  @media (min-width: 1023px) {
   margin-bottom: 20px;
   padding-bottom: 20px;
  }
`

export const SizeButtonWrapper = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top:10px;
  margin-bottom: 15px;
  text-align: center;
  justify-content: center;
`
export const SizeButton = styled.button`
  width:35px;
  height: 35px;
  font-size: 0.8em;
  border-radius: 0px;
  margin: 3px;
  background-color: whitesmoke;
  padding: 0;

  ${({selected}) => selected && `
    border: 5px solid #222;
    border-radius: 2px;
  `} 
`

export const AddtoCartWrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  flex-wrap: nowrap;
  
`
export const AddtoCartButton = styled.button`
  cursor: pointer;
  width:88%;
  height: 50px;
  border-radius: 0px;
  background-color: rgb(38, 39, 39);
  color:whitesmoke;
  margin-left: 3px;

  ${({disabled}) => disabled && `
    cursor: not-allowed;
    background-color: rgb(100, 100, 100);
    color: grey;
  `} 

   @media (min-width: 1023px) {
   font-size: 1.3em;
  }
`
export const BackButton = styled.button`
  width:100%;
  height: 50px;
  border-radius: 0px;
  background-color: whitesmoke;
  color:black;
  margin-left: 0%;
`
