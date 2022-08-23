import React, { useState } from 'react'
import { Router, Route } from 'react-router-dom'
//import { customHistory } from './stores'

import StockPicker from './components/StockPicker'
import NavBar from './components/NavBar'
import MagicEightBall from "./components/MagicEightBall"
import GameOfChance from './components/GameOfChance'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import WinOrLose from './components/WinOrLose'
import ThemeContext from './components/ThemeContext'

function App() {

  let [moneyOnHand, setMoneyOnHand] = useState(100)
  const [stockValue, setStockValue] = useState(0)
  const [bet, setBet] = useState({})
  const theme = useState('red')

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">

        <NavBar />
        <UserProfile />
        <StockPicker
          moneyOnHand={moneyOnHand}
          setMoneyOnHand={setMoneyOnHand}
          stockValue={stockValue}
          setStockValue={setStockValue}
          bet={bet}
          setBet={setBet}
        />
        <WinOrLose
          moneyOnHand={moneyOnHand}
          bet={bet}
        />
        <MagicEightBall />
        <GameOfChance />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
