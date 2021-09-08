import React from "react";
import { Link } from "react-router-dom";
import {
  StlyedFormWrappper,
  StlyedForm,
  StlyedInput,
  Button
} from "./FrontPageStyle";


const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
      <StlyedFormWrappper>
        <StlyedForm>
          <label htmlFor="UserName">User Name</label>
          <StlyedInput type="text" name="UserName" placeholder="UserName" />
          <label htmlFor="Password">Password</label>
          <StlyedInput type="text" name="Password" placeholder="Password" />
          <Link to="/">
            <Button>Login</Button>
          </Link>

          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </StlyedForm>
      </StlyedFormWrappper>
    </>
  );
};

export default Login;
