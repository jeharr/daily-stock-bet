import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './StockPicker.scss'
import { isEmpty } from 'lodash'
import moment from 'moment'



const StockPicker = ({ moneyOnHand, setMoneyOnHand, stockValue, setStockValue, bet, setBet, ...props }) => {

  const [stockTicker, setStockTicker] = useState([])
  const [selectedTicker, setSelectedTicker] = useState('')
  const [stockData, setStockData] = useState({})
  const [wager, setWager] = useState(0)
  const [stockStatus, setStockStatus] = useState('Static')

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

      console.log('STOCK DATA*******', stockData)

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

  let buttonSelect;

  if (selectedTicker) {
    buttonSelect = (
      <>
        <input
          id='wager'
          value={wager}
          placeholder="Place Bet"
          onChange={(e) => setWager(e.target.value)}
        >
        </input>
        <br />
        <button
          onClick={() => {
            setStockStatus('up')
          }}
        >
          Stock Goes Up
        </button>
        <button
          onClick={() => {
            setStockStatus('down')
          }}
        >
          Stock Goes Down
        </button>
        <br />
        <button
          onClick={() => {
            setMoneyOnHand(moneyOnHand - wager)
            setBet({
              currentTime: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
              stockTicker: stockData[selectedTicker].symbol,
              stockName: stockData[selectedTicker].name,
              currentValue: stockData[selectedTicker].price,
              stockChange: stockData[selectedTicker].change,
              wagerAmount: wager,
              stockDirection: stockStatus
            })
            setStockValue(stockData[selectedTicker].price)
            setWager(0)
          }}
        >
          Place Bet
        </button>

      </>
    )

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
        <h4>Stock Info: </h4>
        {stockTickerComponent}
        Money On Hand: {moneyOnHand}
        <br />
        {buttonSelect}
        {console.log('STOCK STATUS', stockStatus, 'WAGER', wager, 'MONEY ON HAND', moneyOnHand, 'STOCK VALUE', stockValue, 'BET', bet)}
      </div>
    </div>
  )
}

export default StockPicker

/// display yahoo stock data and make able to select a stock
