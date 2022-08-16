import { useState } from 'react'


const WinOrLose = (moneyOnHand, bet) => {

  const [betStatus, setBetStatus] = useState('')

  return (
    <div>
      You won! let us double your ${moneyOnHand.bet.wagerAmount} wager!!!
      {console.log('****INSIDE THE WINORLOSE BET', moneyOnHand.bet.wagerAmount)}
    </div>
  )
}

export default WinOrLose
