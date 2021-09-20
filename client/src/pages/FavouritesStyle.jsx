import styled from 'styled-components'

export const FavouritesWraper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5%;
   @media (min-width: 1023px) {
    flex-direction: row;
    width:100%;
  }

`

export const FavouritesLists = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width:90%;
  margin-left: 5%;

   @media (min-width: 1023px) {
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    background-color:none;
    box-shadow: none;
  }

`

export const FavouriteCard = styled.div`
  display:flex;
  flex-direction: row;
  height:15%;
  margin-bottom: 10px;
  text-align: center;
  justify-content:space-around;
  height:20%;
  background-color: whitesmoke;
  box-shadow: 5px 5px 5px lightgray;
   @media (min-width: 1023px){
     flex-direction: column;
     width:15%;
     margin-right: 20px;
     box-shadow: none;
   }
`

export const FavouriteImg = styled.img`
  width:50%;
  margin-right: 5px;
  @media (min-width: 1023px){
      width:100%;
      height: 300px;
      margin-right: 10px;

  }

`