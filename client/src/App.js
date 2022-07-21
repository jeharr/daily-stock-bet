import React from 'react'
import { Router, Route } from 'react-router-dom'
import axios from 'axios'
//import { customHistory } from './stores'

import StockPicker from './components/StockPicker'

function App() {

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
    })
  }
  return (
    <div className="App">
      <button onClick={getData}>click me</button>
      <StockPicker />
    </div>
  );
}

export default App;
