import styled from 'styled-components'

export const FavouritesWraper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5%;
  margin-bottom: 15%;
  @media (min-width: 1023px) {
    flex-direction: row;
    width:100%;
    margin-top: 2%;
    margin-bottom: 15%;
  }
  @media (min-width: 1024.9px) {
    margin-bottom: 5%;
  }


`

export const FavouriteHeader = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    margin-top: 5px;
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
    width:80%;
    margin-left: 5%;
  }

`

export const FavouriteCard = styled.div`
  display:flex;
  flex-direction: row;
  margin-bottom: 0px;
  padding-top: 5px;
  text-align: center;
  justify-content:space-around;
  background-color: white;
  border-bottom:1px darkgrey solid;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin-right: 20px;
    box-shadow: none;
    margin-bottom:0%;
    border-bottom:1px darkgrey solid;

  }
  @media only screen and (min-width: 1023px) {
    flex-direction: column;
    border-bottom: none;
  }
   @media (min-width: 1024.9px){
     flex-direction: column;
     width:18%;
     margin-right: 20px;
     box-shadow: none;
     margin-bottom: 5%;
   }
`

export const FavouriteImg = styled.img`
  width:40%;
  height:10%;
  margin-right: 5px;
  @media only screen and (min-width: 768px) {
    width:35%;
  }
  @media (min-width: 1023px){
      width:100%;
      height: 300px;
      margin-right: 10px;

  }
`
