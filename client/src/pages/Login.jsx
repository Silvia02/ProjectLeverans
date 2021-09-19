import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useHistory} from "react-router";
import {
  StlyedFormWrappper,
  StlyedForm,
  StlyedInput,
  Button
} from "./FrontPageStyle";


const Login = ({stayLogedin}) => {

  const history = useHistory();
   const [messages, setMessages] = useState("")
  const [user, setUser] = useState({
    email: "",
    password: "",

   });
  const handleChange = (e) => {
    const { name,value} = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }
console.log(user)
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/login', user)
      .then(res => {
        
        setMessages((res.data.message))
        stayLogedin(res.data.user);
        history.push("/home")
      })
  }
  return (
    <>
      <h1>Login</h1>
      <StlyedFormWrappper>
        <StlyedForm>
          <label htmlFor="Email">Email</label>
          <StlyedInput type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} />
          <label htmlFor="Password">Password</label>
          <StlyedInput type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
          <div style={{marginTop:"15px", padding:"5px",textAlign:"center"}}>
             <p style={{ color: "orangered",fontSize:"20px" }}>{messages}</p>
          </div>
          <Button onClick={handleLogin}>Login</Button>
          <Button onClick={() => history.push('/register')}>Register</Button>

        </StlyedForm>
      </StlyedFormWrappper>
    </>
  );
};

export default Login;
