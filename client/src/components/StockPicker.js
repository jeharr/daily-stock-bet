import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styles from './StockPicker.scss'

import NavBar from './NavBar'
import GameOfChance from './GameOfChance'
import MagicEightBall from './MagicEightBall'
import Footer from './Footer'

const StockPicker = () => {

  const [selectedSymbol, setSelectedSymbol] = useState('')
  const [stocks, setStocks] = useState([])

  const getData = () => {
    console.log("GETTING DATA")
    axios({
      method: 'get',
      url: 'https://yfapi.net/v1/finance/trending/US',
      headers: {
        'X-API-KEY': 'HoQHKV0tbk9a436WLsg1K2N7bPAFbVRq6pvgQA5t'
      }
    }).then((res) => {
      console.log("FROM YAHOO", res)

      setStocks(res.data.finance.result[0].quotes)

    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getData()

  }, [])


  const handleStockSelect = (stock) => {
    setSelectedSymbol(stock)
  }

  // const stocks = ['FOUR', 'AT&T', 'AMZN', 'TSLA', 'GOOG', 'SONY', 'WEDS']

  return (
    <div className={styles.stockPickerContainer}>
      <NavBar />
      <div className={styles.stock}>
        <div>
          <h1>Selected Stock: {selectedSymbol}</h1>
          <h1>Top 20 Stocks</h1>
        </div>
        <h2>Stocks:</h2>
        {stocks.map((stock, index) => {
          return (
            <li key={index} onClick={() => {
              handleStockSelect(stock.symbol)
            }}>{stock.symbol}</li>
          )
        })}
      </div>
      <br />
      <h2>Games</h2>
      <MagicEightBall />
      <GameOfChance />
      <Footer />
    </div>
  )
}

export default StockPicker
