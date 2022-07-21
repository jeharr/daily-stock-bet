import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styles from './StockPicker.scss'

import NavBar from './NavBar'
import GameOfChance from './GameOfChance'
import MagicEightBall from './MagicEightBall'
import Footer from './Footer'

const StockPicker = () => {

  const [selectedSymbol, setSelectedSymbol] = useState('cat')
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
  console.log("this is the stocks variable", stocks)
  return (
    <div className={styles.stockPickerContainer}>
      <NavBar />
      <div className={styles.stock}>
        <div>
          <h1>Selected Stock: {selectedSymbol}</h1>
          <h1>Top 20 Stocks</h1>
          {stocks.map((stock) => {
            return (
              <li onClick={() => {
                handleStockSelect(stock.symbol)
              }}>{stock.symbol}</li>
            )
          })}
        </div>
        <h2>Games</h2>
        <MagicEightBall />
        <GameOfChance />
      </div>
      <br />
      <Footer />
    </div>
  )
}

export default StockPicker
