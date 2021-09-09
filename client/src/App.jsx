import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import FrontPage from './pages/FrontPage';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import ShippingDetails from './pages/ShippingDetails';

function App() {
  //hellow world
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path = "/checkout">
            <ShippingDetails/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
