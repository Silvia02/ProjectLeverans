import styled from "styled-components";

export const FrontPageWrapper = styled.div`
  display:flex;
  flex-direction: column;
`;
export const PhotoCard = styled.div`
  position: relative;

`;
export const Photo = styled.img`
  width:100%;
  height:220px;
  height:180px;
  height:180px;
  object-fit: cover;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  display: block;    
`;
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
  `;

/*
*************************
*************************LOGIN PAGE STYLES************************
*/
  
  export const StlyedFormWrappper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
  `;

  export const StlyedForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #ffff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    label {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }
  `;

  export const StlyedInput = styled.input`
    display: block;
    width: 100%;
    background-color: #eee;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 5px;
  `;
  export const Button = styled.button`
background: ${(props) => (props.primary ? "gold" : "gold")};
color: ${(props) => (props.primary ? "black" : "black")};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
transition-duration: 0.4s;
  border-radius:20px;
  border:none;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
 
&:hover {
   {
    background-color: pink;
    color: black;
    }
`;
