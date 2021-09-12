import React, { useEffect, useState } from 'react'
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
import Header from './components/Header/Header';

function App() {
  
  const [user, setUserLogin] = useState({})
  
  //check is user is store in local storage
  useEffect(() => {
   setUserLogin(JSON.parse(localStorage.getItem("MyUser")))
  },[])
  const stayLogedin = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setUserLogin(user)
  }
  return (
     <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <FrontPage />
            </Route>
            <Route path="/login">
              <Login stayLogedin={stayLogedin}/>
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
          <Route>{
            user && user._id ? <Header stayLogedin={stayLogedin} userName={user.name}/> : <Login stayLogedin={stayLogedin}/>
          }
            <Home/>
          </Route>
          </Switch>
        </Router>
     </div>
   
  );
}

export default App;
