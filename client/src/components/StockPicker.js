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
      url: 'https://yfapi.net/v1/finance/trending/US',
      headers: {
        'X-API-KEY': 'HoQHKV0tbk9a436WLsg1K2N7bPAFbVRq6pvgQA5t'
      }
    }).then((res) => {
      // console.log('FULL INFO OBJECT YAHOO API', res)

      const stocksArray = res.data.finance.result[0].quotes.map((stock) => {
        return (
          stock.symbol
        )
      })


      setStockTicker(stocksArray)
      console.log("STOCKS ARRAY", stocksArray)

      axios({
        method: 'get',
        url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${stocksArray.join(',')}`,
        headers: {
          'X-API-KEY': 'HoQHKV0tbk9a436WLsg1K2N7bPAFbVRq6pvgQA5t'
        }
      }).then((res) => {

        const fullStockData = res.data.quoteResponse.results
        console.log(fullStockData)

        const stockArray = fullStockData.map((data) => (
          {
            symbol: data.symbol,
            fullExchangeName: data.fullExchangeName,
            companyName: data.displayName,
            longName: data.longName,
            currency: data.currency,
            analystRating: data.averageAnalystRating,
            regularMarketDayHigh: data.regularMarketDayHigh,
            regularMarketDayLow: data.regularMarketDayLow,
            fiftyDayAverage: data.fiftyDayAverage,
            fiftyTwoWeekHigh: data.fiftyTwoWeekHigh,
            fiftyTwoWeekRange: data.fiftyTwoWeekRange,
            fiftyTwoWeekLow: data.fiftyTwoWeekLow,
            preMarketPrice: data.preMarketPrice,
            twoHundredDayAverage: data.twoHundredDayAverage,
            twoHundredDayAverageChange: data.twoHundredDayAverageChange
          }
        ))


        function reducer(acc, curr) {
          return { ...acc, [curr.symbol]: curr }
        }

        let stockObjects = stockArray.reduce(reducer, {})


        setStockData(stockObjects)
        console.log(stockData.AAPL)

      })


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
        {/* <h3>Current Stock: {selectedTicker}</h3>
        <h4>Additional Stock Info: </h4>
        <p>Company Name: {stockData[selectedTicker].companyName}</p>
        <p>Currency Type: {stockData[selectedTicker].currency}</p>
        <p>Analyst Rating: {stockData[selectedTicker].analystRating}</p>
        <p>Market High: {stockData[selectedTicker].regularMarketDayHigh}</p>
        <p>Market Low: {stockData[selectedTicker].regularMarketDayLow}</p> */}
      </div>
      <h3>Top 20 Stocks</h3>
      {stockTicker.map((ticker, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              handleStockSelect(ticker)
            }}
          >
            {ticker}
          </li>
        )
      })}
    </div>
  )
}

export default StockPicker

/// display yahoo stock data and make able to select a stock
