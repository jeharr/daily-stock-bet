import React, { useState } from 'react'
import { Router, Route } from 'react-router-dom'
//import { customHistory } from './stores'

import StockPicker from './components/StockPicker'
import NavBar from './components/NavBar'
import MagicEightBall from "./components/MagicEightBall"
import GameOfChance from './components/GameOfChance'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {

  let [moneyOnHand, setMoneyOnHand] = useState(100)
  const [stockValue, setStockValue] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <UserProfile />
      <StockPicker
        moneyOnHand={moneyOnHand}
        setMoneyOnHand={setMoneyOnHand}
        stockValue={stockValue}
        setStockValue={setStockValue}
      />
      {/* <MagicEightBall /> */}
      {/* <GameOfChance /> */}
      <Footer />
    </div>
  );
}

export default App;
