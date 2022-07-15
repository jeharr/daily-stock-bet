import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"

const StockCard = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h1>Stock Symbol</h1>
        <image>Logo</image>
        <h2>Stock Value</h2>
        <p>Stock Info</p>
      </div>
    </div>
  )
}

export default StockCard
