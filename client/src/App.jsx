import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import FrontPage from './pages/FrontPage';
import Products from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import RegisterPage from './pages/RegisterPage';
import ShippingDetails from './pages/ShippingDetails';

function App() {
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
            <Route exact path="/products">
              <Products />
            </Route>
          <Route path="/products/:id">
            <Product />
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
