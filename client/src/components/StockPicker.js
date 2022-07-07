import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styles from './StockPicker.scss'

const StockPicker = () => {

  const [selectedSymbol, setSelectedSymbol] = useState('')
  const [data, setData] = useState('cheeseBurger')

  const getData = () => {
    console.log("GETTING DATA")
    axios({
      method: 'get',
      url: 'https://yfapi.net/v1/finance/trending/US',
      headers: {
        'X-API-KEY': 'YhcMFdSYF51p57zzdDnXi3CqXguPBs8vdmiuH0Q8'
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

  return (
    <div className={styles.stockPickerContainer}>
      this is the container for all the stocks
      <div className={styles.stock}>
        <div>
          <h1>Top 20 Stocks</h1>
          <button href="https://finance.yahoo.com/">Click to view more</button>
          <br></br>
          <a href="https://finance.yahoo.com/">Yahoo Finance</a>
        </div>
      </div>
    </div>
  )
}

export default StockPicker

/// display yahoo stock data and make able to select a stock
