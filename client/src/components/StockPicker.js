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
      // console.log("STOCKS ARRAY", stocksArray)

      axios({
        method: 'get',
        url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${stocksArray.join(',')}`,
        headers: {
          'X-API-KEY': 'Zv0yymqdZZ32NiUUeV2Cq4CD8rsQwsZQ8FdQkUvx'
        }
      }).then((res) => {

        const fullStockData = res.data.quoteResponse.result
        // console.log('THIS WORKS', fullStockData)

        const stockArray = fullStockData.map((data) => (
          {
            symbol: data.symbol,
            fullExchangeName: data.fullExchangeName,
            companyName: data.displayName,
            shortName: data.shortName,
            longName: data.longName,
            currency: data.currency,
            analystRating: data.averageAnalystRating,
            ask: data.ask,
            bid: data.bid,
            regularPrice: data.regularMarketPrice,
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

        console.log("******STOCK ARRAY***", stockArray)
        function reducer(acc, curr) {
          return { ...acc, [curr.symbol]: curr }
        }

        let stockObjects = stockArray.reduce(reducer, {})


        setStockData(stockObjects)
        console.log('STOCK DATA****', stockData)
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
  const theStock = 'BA'

  return (
    <div className={styles.stockPickerContainer}>
      <div>
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
      <div>
        <h3>Current Stock: {selectedTicker}</h3>
        <h4>Additional Stock Info: </h4>
        {/* <p>Company Name: {stockData[theStock].shortName ? stockData[theStock].shortName : 'Nothing'}</p> */}
        {/* <p>Currency Type: {stockData[theStock].currency}</p>
        <p>Ask: {stockData[theStock].ask}</p>
        <p>Bid: {stockData[theStock].bid}</p>
        <p>Analyst Rating: {stockData[theStock].analystRating ? stockData[theStock].analystRating : 'N/A'}</p>
        <p>Market High: {stockData[theStock].regularMarketDayHigh}</p>
        <p>Market Low: {stockData[theStock].regularMarketDayLow}</p> */}
      </div>
    </div>
  )
}

export default StockPicker

/// display yahoo stock data and make able to select a stock
