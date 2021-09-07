import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import FrontPage from './pages/FrontPage';

function App() {
  return (
    <div className="App">
      <h1>Front page </h1>
      <Router>
        <Switch>
            <Route exact path="/">
              <FrontPage />
            </Route>
        </Switch>
     </Router>
    </div>
  )
}

export default App;
