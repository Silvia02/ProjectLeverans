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
  width:80%;
  margin-left: 10%;

   @media (min-width: 1023px) {
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    background-color:none;
    box-shadow: none;
    width:80%;
    margin-left: 5%;
  }

`

export const FavouriteCard = styled.div`
  display:flex;
  flex-direction: row;
  margin-bottom: 5px;
  text-align: center;
  justify-content:space-around;
  height:15%;
  background-color: white;
  box-shadow: 2px 2px 2px whitesmoke;
   @media (min-width: 1023px){
     flex-direction: column;
     width:18%;
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
