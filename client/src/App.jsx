import React, { useState } from 'react'
import ShippingForm from './ShippingDetails/ShippingForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <ShippingForm/>
    </div>
  )
}

export default App
