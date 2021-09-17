import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ApiUrlContext from './ApiUrlContext.js';

const ENV = {
  development: 'http://localhost:4000/api',
  production: 'https://leverans.rubinbarclay.dev/api'
}

ReactDOM.render(
  <ApiUrlContext.Provider value={ENV.development}>
    <App />
  </ApiUrlContext.Provider>,
  document.getElementById('root')
)
