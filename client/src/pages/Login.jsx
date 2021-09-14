import React ,{useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import {
  StlyedFormWrappper,
  StlyedForm,
  StlyedInput,
  Button
} from "./FrontPageStyle";


const Login = ({setUserLogin}) => {
   const history = useHistory();
   const [user, setUser] = useState({
    email: "",
    password: "",
   });


  //testing some things

  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const history = useHistory();
  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });


  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/login', user)
      .then(res => {
        alert(res.data.message)
        setUserLogin(res.data.user);
        history.push("/home")
      })
  }
  return (
    <>
      <h1>Login Page</h1>
      <StlyedFormWrappper>
        <StlyedForm>
          <label htmlFor="Email">Email</label>
          <StlyedInput type="email" name="email" value={user.email} placeholder="UserName" onChange={handleChange}/>
          <label htmlFor="Password">Password</label>
          <StlyedInput type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
            <Button onClick={handleLogin}>Login</Button>
            <Button onClick={()=> history.push('/register')}>Register</Button>
          
        </StlyedForm>
      </StlyedFormWrappper>
    </>
  );
};

export default Login;
