import styled from 'styled-components'


export const CartPageWrapper = styled.div`
  width:90%;
  display:flex;
  flex-direction: column;
  margin-left: 0%;
  margin-top:10px;
  @media (min-width: 768px){
      width:100%;
      margin-left: 0%;
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
    margin-top: 5px;
    margin-left:20%;
    @media (min-width: 1023px){
      height:8%;
      width:80%;
      margin-left: 30%;
      margin-top: 5%;
    }
    @media (min-width: 1024.9px){
      width:30%;
      margin-left: 40%;
      margin-top: 1%;
  }
`
export const CartWrapper = styled.div`
  width: 100%;
  margin-left: 10%;

  @media (min-width: 768px){
      width:80%;
      margin-left: 10%;
  }
  @media (min-width: 1023px){
    width:80%;
    margin-left:15%;
  }
  @media (min-width: 1024.9px){
      width:30%;
      margin-left: 35%;
  }

`

export const CartCard = styled.div`
  display:flex;
  flex-direction: row;
  margin-bottom: 2px;
  text-align: center;
  margin-right: 5px;
  justify-content:space-around;
  background-color: white;
  box-shadow: 2px 2px 2px whitesmoke;
  @media (min-width: 1023px){
    width:100%;
  }
   @media (min-width: 1024.9px){
     width:100%;
     margin-bottom: 2px;
   }

`
export const CartText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin-top: 5%;
  font-family: 'Times New Roman', Times, serif;
  @media (min-width: 768px){
    width:80%;
    margin-left: 10%;
  }
  @media (min-width: 1023px){
    width:80%;
    margin-left: -35%;
  }

  @media (min-width: 1024.9px){
    width:20%;
    margin-left: -50%;
  }
  
`
export const CheckoutWrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  margin-left: 10%;
   @media (min-width: 768px){
      width:80%;
      margin-left: 10%;
  }
  @media (min-width: 1023px){
    width:80%;
    margin-left:15%;
  }
  @media (min-width: 1024.9px){
    width:30%;
    height:200px;
    padding:0px;
    padding-top: 80px;
    justify-content: center;
    background-color:white;
    box-shadow: 5px 5px 5px 5px whitesmoke;
    margin-left: 35%;
    margin-top: -10px;
  }
`