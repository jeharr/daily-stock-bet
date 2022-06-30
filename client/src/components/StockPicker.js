import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import styles from './StockPicker.scss'

const StockPicker = () => {

  const [selectedSymbol, setSelectedSymbol] = useState('')

  return (
    <div className={styles.stockPickerContainer}>
      this is the container for all the stocks
      <div className={styles.stock}>
          <div>
            stock name one
          </div>
      </div>
      <div className={styles.stock}>
          <div>
            stock name two
          </div>
      </div>
      <div className={styles.stock}>
          <div>
            stock name three
          </div>
      </div>
      <div className={styles.stock}>
          <div>
            stock name four
          </div>
      </div>
    </div>
  )
}

export default StockPicker

/// display yahoo stock data and make able to select a stock