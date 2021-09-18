import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
`

export const HeaderLinks = styled.div`
  width:50%;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  padding-top: 22px;
  padding-right: 10px;
  font-size:0.95em;
`

export const FrontPageWrapper = styled.div`
  display:flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (min-width: 1023px) {
    width:80%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 13%; 
    margin-bottom: 80px;
  }
`;
export const PhotoCard = styled.div`
  position: relative;
  @media (min-width: 1023px) {
    width:45%;
    margin:10px;
  }

`;
export const Photo = styled.img`
  width:100%;
  height:200px;
  object-fit: cover;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  display: block; 
  @media (min-width: 1023px) {
    width:100%;
    height:300px;
  }   
`;
export const CategoryButton = styled.button`
  position: absolute;
  left: 38%;
  top: 38%;
  width:22%;
  height:25%;
  border-radius:20px;
  border:none;
  padding:1px;
  background-color:gold;
  font-size: 1.3em;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    @media (min-width: 1023px) {
    width:80px;
    height:50px;
    left:45%;
    top:40%;
    font-size: 1.5em;
  } 
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
    background-color: pink;
    color: black;
    }
`;
