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
import MyCart from './pages/MyCart';
import RegisterPage from './pages/RegisterPage';

function App() {
  //hellow world
  return (
<>
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
        </Switch>
      </div>
    </Router>

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
          <Route path = "/mycart">
              <MyCart/>
            </Route>
          </Switch>
        </Router>
     </div>
   
</>
  );
}

export default App;
