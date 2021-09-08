import React from "react";
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
          <Button>Login</Button>
          <Button>Register</Button>
        </StlyedForm>
      </StlyedFormWrappper>
    </>
  );
};

export default Login;
