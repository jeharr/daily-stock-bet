import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styles from './StockPicker.scss'

import MagicEightBall from './MagicEightBall'
import GameOfChance from './GameOfChance'
import NavBar from './NavBar'


const StockPicker = () => {

  const [selectedSymbol, setSelectedSymbol] = useState('')
  const [data, setData] = useState('cheeseBurger')

  const getData = () => {
    console.log("GETTING DATA")
    axios({
      method: 'get',
      url: 'https://yfapi.net/v1/finance/trending/US',
      headers: {
        'X-API-KEY': 'HoQHKV0tbk9a436WLsg1K2N7bPAFbVRq6pvgQA5t'
      }
    }).then((res) => {

      setData(res.data.finance.result[0].quotes)

    }).catch((err) => {
      console.log(err)
    })
  }
  console.log("data", data)
  useEffect(() => {
    getData()

  }, [])

  const stocks = data
  // const stocks = ['FOUR', 'AT&T', 'AMZN', 'TSLA']

  return (
    <div className={styles.stockPickerContainer}>
      <div className={styles.stock}>
        <NavBar />
        <div>
          <h1>Top 20 Stocks</h1>
          <ul>
            <h2>Stocks:</h2>
            {stocks.map((stock) => {
              return (
                <li key={stock.symbol}>
                  <button>
                    {stock.symbol}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <br />
        <MagicEightBall />
        <br />
        <div className={styles.stockPickerContainer}>
          <GameOfChance />
        </div>
      </div>
      <a href="https://finance.yahoo.com/">Yahoo Finance</a>
    </div>
  )
}

export default StockPicker

/// display yahoo stock data and make able to select a stock
