import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styles from './StockPicker.scss'

const StockPicker = () => {

  const [selectedSymbol, setSelectedSymbol] = useState('')

  const getData = () => {
    console.log("GETTING DATA")
    axios({
      method: 'get',
      url: 'https://yfapi.net/v1/finance/trending/US',
      headers: {
        'X-API-KEY': 'Xcu0IEVbYf55SP8NEWrrlabp8XxqTxPL7S5TVyf8'
      }
    }).then((res) => {
      console.log("FROM YAHOO", res)
      const json = res.json()

      setSelectedSymbol(json)
    }).catch((err) => {
      console.log(err)
    })
  }

  // async function requestStocks() {
  //   const res = await fetch(
  //     'https://yfapi.net/v1/finance/trending/US'
  //   )

  //   const json = await res.json()

  //   setStock(json.stock)
  // }

  return (
    <div className={styles.stockPickerContainer}>
      this is the container for all the stocks
      <div className={styles.stock}>
        <div>
          stock name one
        </div>
      </div>
    </div>
  )
}

export default StockPicker

/// display yahoo stock data and make able to select a stock
