import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import FrontPage from './pages/FrontPage';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import ShippingDetails from './pages/ShippingDetails';

function App() {
  //hellow world
  return (
     <div className="App">
        <Router>
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
            <Route path="/home">
              <Home />
            </Route>
            <Route path = "/checkout">
              <ShippingDetails/>
            </Route>
          </Switch>
        </Router>
     </div>
   
  );
}

export default App;
