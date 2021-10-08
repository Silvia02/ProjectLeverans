import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router";
import {
  StlyedFormWrappper,
  StlyedForm,
  StlyedInput,
  Button
} from "./FrontPageStyle";
import Footer from "../components/footer/Footer.jsx";


const Login = ({stayLogedin}) => {

  const history = useHistory();

  const [messages, setMessages] = useState("")
  const [user, setUser] = useState({
    email: "",
    password: "",

  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`/api/login`, user)
      .then(res => {
        setMessages((res.data.message))
        stayLogedin(res.data.user);
        history.push("/home")
      })
  }

  return (
    <>
      <h2>Login</h2>

      <StlyedFormWrappper>
        <StlyedForm>
          <label htmlFor="Email">Email</label>
          <StlyedInput type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} />
          <label htmlFor="Password">Password</label>
          <StlyedInput type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
          <div style={{marginTop: "15px", padding: "5px", textAlign: "center"}}>
            <p style={{color: "orangered", fontSize: "20px"}}>{messages}</p>
          </div>
          <Button onClick={handleLogin}>Login</Button>
          <Button onClick={() => history.push('/register')}>Register</Button>

        </StlyedForm>
      </StlyedFormWrappper>
      <Footer />
    </>
  );
};

export default Login;
