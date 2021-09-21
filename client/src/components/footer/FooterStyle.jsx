import styled from 'styled-components'

export const FooterWrapper = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: white;
  border-top: black 1px solid;
  position: fixed;
  bottom: 0;
  margin-top: 5%;
  width: 100vw;
  height: 50px;
  z-index:99;
  width:100%;
`
export const ItemsNumber = styled.button`
  width:10px;
  height:10px;
  border-radius:50%;
  background-color:gold;
`