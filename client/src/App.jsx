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

function App() {
  //hellow world

  import Product from './pages/Product';
  import MyCart from './pages/MyCart';
  import RegisterPage from './pages/RegisterPage';
  import ShippingDetails from './pages/ShippingDetails';
  import Home from './pages/Home';

  import Header from './components/Header/Header';

  import Favourites from './pages/Favourites';


  function App() {
  
    const [user, setUserLogin] = useState({})
    const [favourites, setFavourites] = useState([])
    const [shoppingList, setShoppingList] = useState([]);
  
    //check is user is store in local storage
    useEffect(() => {
      setUserLogin(JSON.parse(localStorage.getItem("MyUser")))
    }, [])
    const stayLogedin = (user) => {
      localStorage.setItem("MyUser", JSON.stringify(user))
      setUserLogin(user)
    }

    const onAdd = (product) => {
      const exist = favourites.find(favourite => favourite._id === product._id);
      setFavourites([...favourites, { ...product }])
      if (exist) {
        setFavourites(
          favourites.map(favourite =>
            favourite._id === product._id ? { ...exist, quantity: exist.quantity + 1 }
              : favourite
          )
        )
      } else {
        setFavourites([...favourites, product])
      }
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

    const addToShoppingList = (product) => {
      const exist = shoppingList.find(shoppingItem => shoppingItem._id === product._id);
      setShoppingList([...shoppingList, { ...product }])
      if (exist) {
        setShoppingList(
          shoppingList.map(shoppingItem =>
            shoppingItem._id === product._id ? { ...exist, quantity: exist.quantity + 1 }
              : shoppingItem
          )
        )
      } else {
        setShoppingList([...shoppingList, product])
      }
      console.log('Add to cart button is onclick')
      console.log(product)
      console.log(shoppingList)
    }
    const removeFromShoppingList = (product) => {
      const exist = shoppingList.find(shoppingItem => shoppingItem._id === product._id);
      if (exist.quantity === 1) {
        setShoppingList(shoppingList.filter(shoppingItem => shoppingItem._id !== product._id))
      } else {
        setShoppingList(
          shoppingList.map(shoppingItem =>
            shoppingItem._id === product._id
              ? { ...exist, quantity: exist.quantity - 1 }
              : shoppingItem
          )
        )
      }
    }

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
                <Login stayLogedin={stayLogedin} />
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
              <Route>
                <Products
                  favourites={favourites}
                  onAdd={onAdd}
                />
              </Route>
              <Route path="/products/:id">
                <Product
                  favourites={favourites}
                  shoppingList={shoppingList}
                  onAdd={onAdd}
                  addToShoppingList={addToShoppingList}
                />
              </Route>
              <Route path="/products/favourites">
                <Favourites
                  favourites={favourites}
                  onAdd={onAdd}
                  onRemove={onRemove}
                />
              </Route>

              <Route path="/checkout">
                <ShippingDetails />
              </Route>
              <Route path="/mycart">
                <MyCart />
              </Route>
              <Route path="/mycart">
                <MyCart />

              </Route>
              <Route>{
                user && user._id ? <Header stayLogedin={stayLogedin} userName={user.name} /> : <Login stayLogedin={stayLogedin} />
              }
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>

   
      </>

    );
  }
}

export default App;
