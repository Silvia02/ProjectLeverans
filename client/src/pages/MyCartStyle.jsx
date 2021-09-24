import styled from 'styled-components'


export const CartPageWrapper = styled.div`
  width: 100vw !important;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top:10px;

  @media (min-width: 768px){
      width:100%;
  }
  @media (min-width: 1023px){
    width:90%;
  }
   @media (min-width: 1024.9px){
    width:90%;
  }
`
export const MyCartHeader = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    margin-top: 5px;

    @media (min-width: 1023px){
      height:8%;
      width:80%;
    }

    @media (min-width: 1024.9px){
      width:30%;
  }
`
export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px){
      width:80%;
  }

  @media (min-width: 1023px){
    flex-direction: row;
    flex-wrap: wrap;
    width: 60%;
  }
`

export const CartCardImg = styled.img`
  width: 40%;

  @media (min-width: 1023px){
    width: 100%;
  }
`

export const CartCard = styled.div`
  display:flex;
  flex-direction: row;
  margin-bottom: 2px;
  text-align: center;
  padding: 10px;
  justify-content:space-around;
  background-color: white;
  box-shadow: 2px 2px 2px whitesmoke;

  @media (min-width: 1023px){
    width: 24%;
    flex-direction: column;
  }
`
export const CartText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin-top: 5%;
  font-family: 'Times New Roman', Times, serif;
`
export const CheckoutWrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  padding: 0 5%;

  @media (min-width: 768px){
    width:80%;
  }

  @media (min-width: 1023px){
    width:60%;
  }

  @media (min-width: 1024.9px){
    height:200px;
    padding:0px;
    padding-top: 80px;
    justify-content: center;
    background-color:white;
    box-shadow: 5px 5px 5px 5px whitesmoke;
  }
`
