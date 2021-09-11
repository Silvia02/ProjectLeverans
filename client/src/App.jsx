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
import ShippingDetails from './pages/ShippingDetails';
import Favorites from './pages/Favorites'

function App() {
  const [favorites, setFavorites] = useState([])
  
    const onAdd = (product) => {
      //const exist = favorites.find(favorite => favorite._id === product._id);
      setFavorites([...favorites, product])
      
      {/*if (exist) {
        setFavorites(
          favorites.map(favorite =>
            favorite._id === product._id ? { ...exist, quantity: exist.quantity + 1 }
              : favorite
          )
        )
      } else {
        setFavorites([...favorites, product])
      }*/}
      console.log('favorite button is onclick')
      console.log(product)
      console.log(favorites)
    }
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
              <Products 
                onAdd={onAdd}
                favorites={favorites}
                />
            </Route>
            <Route path="/products/:id">
              <Product
                favorites={favorites}
                onAdd={onAdd} 
            />
            </Route>
            <Route path = "/checkout">
                <ShippingDetails/>
            </Route>
            <Route path = "/mycart">
                <MyCart/>
            </Route>
            <Route path="/favorites" >
              <Favorites
                favorites={favorites}
                onAdd={onAdd}
                />
            </Route>
          </Switch>
        </Router>
     </div>
   
  );
}

export default App;
