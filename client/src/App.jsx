import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
import FrontPage from './pages/FrontPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import MyCart from './pages/MyCart';
import RegisterPage from './pages/RegisterPage';
import ShippingDetails from './pages/ShippingDetails';
import Header from './components/Header/Header';
import Favourites from './pages/Favourites';
import Casual from './pages/Casual';
import Sport from "./pages/Sport";
import Formal from "./pages/Formal";
import DefaultHeader from './components/DefaultHeader/DefaultHeader';
import Footer from './components/footer/Footer';
import ThankYou from './pages/ThankYou';
import {isChrome, isFirefox, isSafari, isMobile, isBrowser} from 'react-device-detect';
import ElectronSpecific from './components/ElectronSpecific/ElectronSpecific';




// Check if user is using electron app
function isElectron() {
  if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') return true;
  if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) return true;
  if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) return true;
  return false;
}


function App() {
  const [favourites, setFavourites] = useState([]);
  const [user, setUserLogin] = useState({})

  // check is user is store in local storage
  useEffect(() => {
    setUserLogin(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const stayLogedin = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setUserLogin(user)
  }

  const [browser, setBrowser] = useState('');
  useEffect(() => {
    if (isMobile) {
      setBrowser('Mobile')
    }
    if (isSafari) {
      setBrowser('Safari')
    }
    if (isChrome) {
      setBrowser('Chrome')
    }
    if (isFirefox) {
      setBrowser('Firefox')
    }

  }, [])
  return (

    <div className="App">
      <Router>
        {user && user._id ? <Header stayLogedin={stayLogedin} userName={user.name} />
          : <DefaultHeader />}
        <Switch>
          <Route exact path="/">
            {
              isMobile && !user?._id ? <Login stayLogedin={stayLogedin} /> : <FrontPage user={user?._id} stayLogedin={stayLogedin} />
            }
          </Route>
          <Route path="/home">
            {
              user && user._id ?
                <Home stayLogedin={stayLogedin} userName={user.name} />
                : <Login stayLogedin={stayLogedin} />
            }
          </Route>
          <Route path="/login">

            <Login stayLogedin={stayLogedin} />

          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/casual">
            <Casual />
          </Route>
          <Route path="/sport">
            <Sport />
          </Route>
          <Route path="/formal">
            <Formal />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/products">
            <Home />
          </Route>
          <Route path="/products/:id">
            <Product
            />
          </Route>
          <Route path="/favourites">
            {
              user && user._id
                ? <Favourites favourites={favourites} setFavourites={setFavourites} />
                : <Login stayLogedin={stayLogedin} />
            }
          </Route>
          <Route path="/checkout">
            {
              user && user._id ? <ShippingDetails /> : <RegisterPage />
            }
          </Route>
          <Route path="/mycart">
            {
              user && user._id ? <MyCart /> : <Login stayLogedin={stayLogedin} />
            }
          </Route>
          <Route exact path="/thankyou">
            <ThankYou />
          </Route>
        </Switch>
      </Router>

      {/* Adds ipc listener that allows you to access the 
        * menu favourites functions throughout the entire app */}
      {isElectron() && <ElectronSpecific setFavourites={setFavourites} />}
    </div>
  )
}

export default App;



