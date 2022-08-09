import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './StockPicker.scss'
import { isEmpty } from 'lodash'


const StockPicker = () => {

  const [stockTicker, setStockTicker] = useState([])
  const [selectedTicker, setSelectedTicker] = useState('')
  const [stockData, setStockData] = useState({})

  const getStockData = () => {
    axios({
      method: 'get',
      url: 'https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=f41a84df03e46f5ac0e7494cbb0c51dc',

    }).then((res) => {

      setStockTicker(res.data)

      const stocksData = res.data

      function reducer(acc, curr) {
        return { ...acc, [curr.symbol]: curr }
      }

      let stocksObject = stocksData.reduce(reducer, {})

      console.log('STOCK OBJECT OF OBJECTS: ', stocksObject)

      setStockData(stocksObject)



    }).catch((err) => {
      console.log('THIS IS THE ERROR: ', err)
    })
  }

  useEffect(() => {
    getStockData()
  }, [])


  const handleStockSelect = (stock) => {
    setSelectedTicker(stock)
  }

  let stockTickerComponent;

  if (!isEmpty(stockData) && selectedTicker) {
    stockTickerComponent = (
      <>
        <p>Ticker: {stockData[selectedTicker].symbol} </p>
        <p>Company Name: {stockData[selectedTicker].name} </p>
        <p>Price: {stockData[selectedTicker].price} </p>
        <p>Change: {stockData[selectedTicker].change} </p>
        <p>Changes Percentage: {stockData[selectedTicker].changesPercentage} </p>
      </>)
  }

  return (
    <div className={styles.stockPickerContainer}>
      <div>
        <h3>Top 30 Stocks</h3>
        {stockTicker.map((stock, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleStockSelect(stock.symbol)
              }}
            >
              {index + 1}: {stock.symbol}
            </li>
          )
        })}
      </div>
      <div>
        <h3>Current Stock: {selectedTicker}</h3>
        <h4>Additional Stock Info: </h4>
        {stockTickerComponent}
      </div>
    </div>
  )
}

export default StockPicker

/// display yahoo stock data and make able to select a stock
