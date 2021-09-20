import styled from 'styled-components'


export const CartPageWrapper = styled.div`
  width:90%;
  display:flex;
  flex-direction: column;
  margin-left: 10%;
  @media (min-width: 1023px){
    flex-direction: row;
    justify-content: center;
    width:80%;
   }

`
export const CartWrapper = styled.div`
  width: 90%;
   @media (min-width: 1023px){
     width:40%;
     margin-right: 0px;
   }
`

export const CartCard = styled.div`
  display:flex;
  flex-direction: row;
  margin-bottom: 5px;
  text-align: center;
  justify-content:space-around;
  background-color: white;
  box-shadow: 2px 2px 2px whitesmoke;
   @media (min-width: 1023px){
     width:85%;
   }

`
export const CartText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin-top: 5%;
`
export const CheckoutWrapper = styled.div`
  width:90%;
  display:flex;
  flex-direction: column;
  @media (min-width: 1023px){
    width:32%;
    height:200px;
    padding:20px;
    padding-top: 80px;
    justify-content: center;
    background-color:white;
    box-shadow: 5px 5px 5px 5px whitesmoke;
  }
`