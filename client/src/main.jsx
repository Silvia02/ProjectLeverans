import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ApiUrlContext from './ApiUrlContext.js';

// const development = 'http://localhost:4000/api';
const production = 'https://leverans.rubinbarclay.dev/api';

ReactDOM.render(
  <ApiUrlContext.Provider value={production}>
    <App />
  </ApiUrlContext.Provider>,
  document.getElementById('root')
)
