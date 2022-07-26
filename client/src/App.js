import React from 'react'
import { Router, Route } from 'react-router-dom'
//import { customHistory } from './stores'

import StockPicker from './components/StockPicker'
import NavBar from './components/NavBar'
import MagicEightBall from "./components/MagicEightBall"

function App() {


  return (
    <div className="App">
      <NavBar />
      <StockPicker />
      <MagicEightBall />
    </div>
  );
}

export default App;
