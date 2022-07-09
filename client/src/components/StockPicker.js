import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styles from './StockPicker.scss'

import MagicEightBall from './MagicEightBall'
import GameOfChance from './GameOfChance'



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
      console.log("FROM YAHOO", res)
      setData(res)

    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getData()

  }, [])

  // const stocks = data.finance.result[0].quotes

  // console.log("THIS IS THE STOCK DATA", stocks)

  return (
    <div className={styles.stockPickerContainer}>
      this is the container for all the stocks
      <div className={styles.stock}>

        <div>
          <h1>Top 20 Stocks</h1>
          <p>Stocks:</p>
        </div>
        <br />
        <MagicEightBall />
        <a href="https://finance.yahoo.com/">Yahoo Finance</a>
        <br />
        <div className={styles.stockPickerContainer}>
          <h3>Leave it to Chance!</h3>
          <GameOfChance />
        </div>
      </div>
    </div>
  )
}

export default StockPicker

/// display yahoo stock data and make able to select a stock
