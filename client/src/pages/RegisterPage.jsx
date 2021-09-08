import React from "react";
import { Link } from "react-router-dom";
import {
  StlyedFormWrappper,
  StlyedForm,
  StlyedInput,
  Button,
} from "./FrontPageStyle";


const Register = () => {
  return (
    <>
      <h1>Register Page</h1>
      <StlyedFormWrappper>
        <StlyedForm>
          <label htmlFor="UserName">User Name</label>
          <StlyedInput type="text" name="UserName" placeholder="UserName" />
          <label htmlFor="Email">Email</label>

          <StlyedInput type="text" name="Email" placeholder="Email" />
          <label htmlFor="Password">Password</label>

          <StlyedInput type="text" name="Password" placeholder="Password" />

          <label htmlFor="Password">Confirm Password</label>
          <StlyedInput
            type="text"
            name="Password"
            placeholder="Confirm Password"
          />
          <Link to="/login">
            <Button>Register</Button>
          </Link>
        </StlyedForm>
      </StlyedFormWrappper>
    </>
  );
};

export default Register;
