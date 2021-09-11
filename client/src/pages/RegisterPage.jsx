import React,{ useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {
  StlyedFormWrappper,
  StlyedForm,
  StlyedInput,
  Button,
} from "./FrontPageStyle";


const Register = () => {
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

  const register = () => {
    const { name, email, password, confirmPassword } = user;
    if (name && email && password && (password === confirmPassword)) {
      axios.post('http://localhost:4000/users', user)
      .then(res =>console.log(res))
      
    
    } else if (password !== confirmPassword) {
      alert("password did not match")
    }
    else {
      alert("invalid input");
    }
  }
  
  return (
    <>
      <h1>Register Page</h1>
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
      
        </StlyedForm>
      </StlyedFormWrappper>
    </>
  );
};

export default Register;
