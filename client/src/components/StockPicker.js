import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './StockPicker.scss'


const StockPicker = () => {

  const [stockTicker, setStockTicker] = useState([])
  const [selectedTicker, setSelectedTicker] = useState('AAPL')
  const [stockData, setStockData] = useState([])

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

  // const dummyStocks = [{ symbol: 'DIS' }, { symbol: 'NTFX' }, { symbol: 'SONY' }, { symbol: 'AMZN' }, { symbol: 'APPL' }, { symbol: 'NIKE' }, { symbol: 'ADDS' }, { symbol: 'FNDR' }, { symbol: 'GBSN' }, { symbol: 'HYPR' }, { symbol: 'PKMN' }, { symbol: 'WRBR' }]


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
        <p>Ticker: {stockData[selectedTicker].symbol} </p>
        <p>Company Name: {stockData[selectedTicker].name} </p>
        <p>Price: {stockData[selectedTicker].price} </p>
        <p>Change: {stockData[selectedTicker].change} </p>
        <p>Changes Percentage: {stockData[selectedTicker].changesPercentage} </p>
        {/* <p>Currency Type: {stockData[selectedTicker].price}</p> */}
        {/* <p>Ask: {stockData[selectedTicker].ask}</p>
        <p>Bid: {stockData[selectedTicker].bid}</p>
        <p>Analyst Rating: {stockData[selectedTicker].analystRating ? stockData[selectedTicker].analystRating : 'N/A'}</p>
        <p>Market High: {stockData[selectedTicker].regularMarketDayHigh}</p>
        <p>Market Low: {stockData[selectedTicker].regularMarketDayLow}</p> */}
      </div>
    </div>
  )
}

export default StockPicker

/// display yahoo stock data and make able to select a stock
