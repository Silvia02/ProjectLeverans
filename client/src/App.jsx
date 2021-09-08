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

function App() {
  return (
   
       
    <Router>
      <div className="App">
      

        <Switch>
          <Route exact path="/">
            <FrontPage />
            </Route>
            <Route path="/login"><Login/></Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
