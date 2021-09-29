import styled from 'styled-components';
import {AddtoCartButton} from './ProductStyle.jsx';

export const FavouritesWrapper = styled.div`
  position: relative;
  /*height: calc(100vh - 130px);*/
  overflow: auto;

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom:5%;
  @media (min-width: 1023px) {
    flex-direction:column;
    width:90%;
    margin-top: 2%;
    margin-bottom: 15%;
    margin-left: 0%;
  }
  @media (min-width: 1024.9px) {
    margin-bottom: 5%;
  }
`

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 40vh;
  width: 80vw;
  margin-top: 5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

export const ModalHeading = styled.h3`
  color: whitesmoke;
  font-size: 24px;
`

export const InvertedAddtoCartButton = styled(AddtoCartButton)`
  width: 100%;
  background-color: whitesmoke;
  color: rgb(38, 39, 39);
  margin: 0 25px;
  margin-top: 5vh;
  `

export const FavouriteHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 3%;
  @media(min-width: 767px) {
    margin-left: 20%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media(min-width: 1022px){
    flex-direction: column;
    justify-content: center;
    margin-left:36%;
  }
  @media(min-width: 1023.9px){
    margin-left:70%;
  }
  @media(min-width: 1500px){
    margin-left: 44%;
    margin-bottom: 3%;
  }
`

export const FavouritesLists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-left:0%;
  margin-bottom: 2%;
 @media(min-width: 415px){
   margin-left: -2.5%;
 }
  @media(min-width: 659px){
   width:80%;
 }

  @media(min-width: 767px) {
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: none;
    box-shadow: none;
    width: 70%;
    margin-left: 0%;
  }
  @media(min-width: 1022px){
    flex-direction: column;
    width:70%;
  }
  @media(min-width: 1023.9px){
    flex-direction: column;
    margin-left:5%;
    width:80%;
  }
  @media(min-width: 1050px){
    flex-direction:row;
    flex-wrap: wrap;
    width:80%;
  }
  @media(min-width: 1120px){
    width:80%;
  }
  @media(min-width: 1500px){
    width:80%;
  }
`

export const FavouriteCard = styled.div`
  width:95%;
  margin-left: 2.5%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
  background-color: white;
  box-shadow: 1px 1px 1px 1px whitesmoke;
 
  @media only screen and(min-width: 767px) {
    flex-direction: row;
    margin-right: 0px;
    box-shadow: none;
    margin-bottom: 0%;
    border-bottom: 1px darkgrey solid;
  }

  @media only screen and(min-width: 1022px) {
    flex-direction: row;
    border-bottom: none;
  }

  @media(min-width: 1023.9px) {
    flex-direction:row;
    height:300px;
    margin-bottom:10px;
  }
  @media(min-width: 1050px) {
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width:20%;
    height:350px;
  }
  @media(min-width: 1220px){
    height:400px;
  }
  @media(min-width: 1500px){
    width:18.5%;
    height:415px;
  }
  
`

export const FavouriteImg = styled.img`
  width: 100%;
  height:220px;
  object-fit:contain;
  margin-left: 0px;

  @media only screen and(min-width: 767px) {
    width: 30%;
    height:300px;
    object-fit: fit;
  }

  @media(min-width: 1022px) {
    width: 100%;
    height:300px;
    object-fit:fit;
    margin-right: 10px;
  }
    @media(min-width: 1050px) {
    width:100%;
    margin-right: 0px;
    margin-top:0px;
  }
  @media(min-width: 1500px){
    width:100%;
    margin-right: 0px;
  }
`
export const FavouriteProductInfo = styled.div`
   width:100%;
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
   margin-left: 5%;
   font-size:1.5em;
   font-family: 'Times New Roman', Times, serif;
    @media(min-width: 1022px) {
  
    margin-top: 30px;
    margin-left:10px;
    font-size:1em;
  }


`
export const AddFavouritetoCartButton = styled.button`
    cursor: pointer;
    background-color: black;
    color:whitesmoke;
    padding:2px;
    width: 95%;
    margin: 4px;
    margin-bottom:15%;
    height:45px;
    font-size: 1.2em;
     @media(min-width: 767px) {
       font-size: 1.4em;
       width: 70%;
     }
     @media(min-width: 1023.9px) {
       width: 70%;
       margin-left:10%;
     }
      @media(min-width: 1050px){
        width:80%;
      }
      @media(min-width: 1500px){
        width:75%;
        margin-left: 8%;
  }

`
