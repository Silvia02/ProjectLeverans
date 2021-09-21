import styled from 'styled-components'


export const CartPageWrapper = styled.div`
  width:90%;
  display:flex;
  flex-direction: column;
  margin-left: 5%;
  @media (min-width: 1024.9px){
    flex-direction: row;
    justify-content: center;
    width:80%;
   }

`
export const MyCartHeader = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    margin-top: 5px;
    @media (min-width: 1024.9px){
      height:8%;
      margin-left: 0%;
    }
`
export const CartWrapper = styled.div`
  width: 100%;
  @media (min-width: 768px){
    width:80%;
    margin-left: 10%;
  }
  @media (min-width: 1023px){
    width:80%;
    margin-left: 10%;
  }
   @media (min-width: 1024.9px){
     width:40%;
     margin-right: 0px;
     margin-top: 6%;
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
   @media (min-width: 1024.9px){
     width:80%;
     margin-bottom: 2px;
   }

`
export const CartText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin-top: 5%;
  font-family: 'Times New Roman', Times, serif
`
export const CheckoutWrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
   @media (min-width: 768px){
    width:80%;
    margin-left: 10%;
  }
  @media (min-width: 1023px){
    width:80%;
    margin-left: 10%;
  }
  @media (min-width: 1024.9px){
    width:32%;
    height:200px;
    padding:20px;
    padding-top: 80px;
    justify-content: center;
    background-color:white;
    box-shadow: 5px 5px 5px 5px whitesmoke;
    margin-top: 6%;
    margin-left: -4%;
  }
`