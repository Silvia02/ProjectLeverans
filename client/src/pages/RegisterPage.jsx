import React,{ useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router";
import {
  StlyedFormWrappper,
  StlyedForm,
  StlyedInput,
  Button,
} from "./FrontPageStyle";
import Header from "../components/Header/Header";


const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]:value
    })
  }

  const register = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = user
    
    if (name && email && password && (password === confirmPassword)) {
      axios.post("http://localhost:4000/users", user)
        .then(res => {
          alert(res.data.message)
          history.push("/login")
        })
    } else {
      alert("invlid input")
    }

  }
  
  return (
    <>
      <h1>Register Page</h1>
      {
        console.log(user)
      }
      <StlyedFormWrappper>
        <StlyedForm>
          <label htmlFor="UserName">User Name</label>
          <StlyedInput type="text" name="name" value={user.name}
            placeholder="UserName" onChange={handleChange}/>
          <label htmlFor="Email">Email</label>

          <StlyedInput type="email" name="email" value={user.email}
            placeholder="Email" onChange={handleChange}/>
          <label htmlFor="Password">Password</label>

          <StlyedInput type="password" name="password" value={user.password}
            placeholder="Password" onChange={handleChange}/>

          <label htmlFor="Password">Confirm Password</label>
          <StlyedInput
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
          />
            <Button onClick={register}>Register</Button>
          <Button onClick={() => history.push('/login')}>Login</Button>
        </StlyedForm>
      </StlyedFormWrappper>
      <Header/>
      
    </>
  );
};

export default Register;
