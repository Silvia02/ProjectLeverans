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
import Favourites from './pages/Favourites';

function App() {
  
  const [user, setUserLogin] = useState({})
  const [favourites, setFavourites] = useState([])
  
  //check is user is store in local storage
  useEffect(() => {
   setUserLogin(JSON.parse(localStorage.getItem("MyUser")))
  },[])
  const stayLogedin = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setUserLogin(user)
  }

  const onAdd = (product) => {
    //const exist = favourites.find(favourite => favourite._id === product._id);
    setFavourites([...favourites, { ...product }])

    {/*if (exist) {
      setFavourites(
        favourites.map(favourite =>
          favourite._id === product._id ? { ...exist, quantity: exist.quantity + 1 }
            : favourite
        )
      )
    } else {
      setFavourites([...favourites, product])
    }*/}
    console.log('favourite button is onclick')
    console.log(product)
    console.log(favourites)
  }
  const onRemove = (product) => {
    const exist = favourites.find(favourite => favourite._id === product._id);
    if (exist.quantity === 1) {
      setFavourites(favourites.filter(favourite => favourite._id !== product._id))
    } else {
      setFavorites(
        favourites.map(favourite =>
          favourite._id === product._id
            ? { ...exist, quantity: exist.quantity - 1 }
            : favourite
        )
      )
    }
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
              <Products 
                favourites={favourites}
                onAdd={onAdd}
              />
            </Route>
            <Route path="/products/:id">
              <Product 
                  favourites={favourites}
                  onAdd={onAdd} 
              />
            </Route>
            <Route path="/products/favourites">
              <Favourites 
                  favourites={favourites}
                  onAdd={onAdd}
                  onRemove={onRemove}
              />
            </Route>
            <Route path = "/checkout">
              <ShippingDetails/>
            </Route>
            <Route path = "/mycart">
              <MyCart/>
            </Route>
            <Route path="/home">{
              user && user._id ? <Home stayLogedin={stayLogedin}/> : <Login stayLogedin={stayLogedin}/>
            } 
            </Route>
          </Switch>
        </Router>
     </div>
   
  );
}

export default App;
