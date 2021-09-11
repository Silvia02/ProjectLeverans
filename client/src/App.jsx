import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
import FrontPage from './pages/FrontPage';
import Products from './pages/Home';
import Login from './pages/Login';

import Product from './pages/Product';
import MyCart from './pages/MyCart';
import RegisterPage from './pages/RegisterPage';
import ShippingDetails from './pages/ShippingDetails';
import Home from './pages/Home';

function App() {
  
  const [user, setUserLogin] = useState({})
  return (
     <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <FrontPage />
            </Route>
            <Route path="/login">
              <Login setUserLogin={setUserLogin}/>
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
          <Route path="/home">{
            user && user._id ? <Home setUserLogin={setUserLogin}/> : <Login setUserLogin={setUserLogin}/>
          }
              
            </Route>
          </Switch>
        </Router>
     </div>
   
  );
}

export default App;
