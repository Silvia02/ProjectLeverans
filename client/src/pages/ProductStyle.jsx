import styled from 'styled-components'

export const ProductDetailCard = styled.div`
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  width:80%;
  margin-left:10%;
`
export const ProductLabel = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1.2em;
  justify-content: space-around;
  margin-bottom: 10px;
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
`
export const ProductDescription = styled.p`
  display: none;
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
  font-size:0.8em;
  border-radius: 0px;
  margin: 3px;
  background-color: whitesmoke;

`
export const AddtoCartWrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  flex-wrap: nowrap;
`
export const AddtoCartButton = styled.button`
  width:88%;
  height: 50px;
  border-radius: 0px;
  background-color: black;
  color:whitesmoke;
  margin-left: 3px;
`
