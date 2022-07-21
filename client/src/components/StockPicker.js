import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './StockPicker.scss'

const StockPicker = () => {

  const [stockTicker, setStockTicker] = useState([])

  const getStockTicker = () => {
    axios({
      method: 'get',
      url: 'https://yfapi.net/v1/finance/trending/US',
      headers: {
        'X-API-KEY': 'HoQHKV0tbk9a436WLsg1K2N7bPAFbVRq6pvgQA5t'
      }
    }).then((res) => {
      console.log('FROM YAHOO API', res)

      setStockTicker(res.data.finance.result[0].quotes)
      console.log(stockTicker)
    }).catch((err) => {
      console.log('THIS IS THE ERROR: ', err)
    })
  }

  useEffect(() => {
    getStockTicker()
  }, [])


  return (
    <div className={styles.stockPickerContainer}>
      this is the container for all the stocks

      {stockTicker.map((ticker) => {
        return (
          <li key={ticker.symbol}>{ticker.symbol}</li>
        )
      })}

    </div>
  )
}

export default StockPicker

/// display yahoo stock data and make able to select a stock
