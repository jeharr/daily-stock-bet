import React from 'react'
import {
  Router,
  Route,
} from 'react-router-dom'

import axios from 'axios'
//import { customHistory } from './stores'

import StockPicker from './components/StockPicker'

function App() {

  return (
    <div className="App">
      <StockPicker />
    </div>
  );
}

export default App;
