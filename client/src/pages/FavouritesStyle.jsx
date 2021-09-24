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
    margin-left: 5%;
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
  background-color: whitesmoke;
  color: rgb(38, 39, 39);
  margin: 0 25px;
  margin-top: 5vh;
  `

export const FavouriteHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5%;
  @media(min-width: 767px) {
    margin-left: 15%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media(min-width: 1023px){
    flex-direction: column;
    justify-content: center;
    margin-left:36%;
  }
  @media(min-width: 1023px){
    margin-left:23%;
  }
`

export const FavouritesLists = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  margin-left:8%;

  @media(min-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: none;
    box-shadow: none;
    width: 70%;
    margin-left: 4%;
  }
  @media(min-width: 1023px){
    flex-direction: row;
  }
  @media(min-width: 1024.9px){
    flex-direction: row;
  }
`

export const FavouriteCard = styled.div`
  width:45%;
  margin-right: 1%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  background-color: white;
  box-shadow: 1px 1px 1px 1px whitesmoke;

  @media only screen and(min-width: 767px) {
    flex-direction: column;
    margin-right: 0px;
    box-shadow: none;
    margin-bottom: 0%;
    border-bottom: 1px darkgrey solid;
  }

  @media only screen and(min-width: 1023px) {
    flex-direction: column;
    border-bottom: none;
  }

  @media(min-width: 1024.9px) {
    flex-direction: column;
    width: 23%;
    margin-right: 20px;
    box-shadow: none;
    margin-bottom: 5%;
  }
`

export const FavouriteImg = styled.img`
  width: 100%;
  height:200px;

  @media only screen and(min-width: 767px) {
    width: 30%;
    object-fit: fit;
  }

  @media(min-width: 1023px) {
    width: 100%;
    height:400px;
    object-fit:cover;
    margin-right: 10px;
  }
  @media(min-width: 1024.9px) {
    width: 100%;
    height:300px;
    object-fit:cover;
    margin-right: 5px;
  }
`
export const FavouriteProductInfo = styled.div`
   width:100%;
   margin-top: -8%;


`
export const AddFavouritetoCartButton = styled.button`
    background-color: black;
    color:whitesmoke;
    padding:2px;
    width:100%;
    margin-top:1em;
    margin-left: 0%;

`