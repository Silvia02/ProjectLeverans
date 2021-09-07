import styled from "styled-components";

export const FrontPageWrapper = styled.div`
  display:flex;
  flex-direction: column;
`
export const PhotoCard = styled.div`
  position: relative;

`
export const Photo = styled.img`
  width:100%;
  height:220px;
  object-fit: cover;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  display: block;    
`
export const CategoryButton = styled.button`
  position: absolute;
  left: 38%;
  top: 40%;
  width:25%;
  height:20%;
  border-radius:20px;
  border:none;
  background-color:gold;
  font-size: 1.2em;
  font-weight: bold;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  `