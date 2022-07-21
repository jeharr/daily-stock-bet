import React from 'react'
import { Router, Route } from 'react-router-dom'
//import { customHistory } from './stores'

import StockPicker from './components/StockPicker'
import NavBar from './components/NavBar'

function App() {


  return (
    <div className="App">
      <NavBar />
      <StockPicker />
    </div>
  );
}

export default App;
