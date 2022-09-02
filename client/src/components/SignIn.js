import { useState } from 'react'
import styles from './StockPicker.scss'


const SignIn = () => {
  const [userName, setUserName] = useState('')


  return (
    <div className={styles.nav}>
      <form >

        <h3>Sign In</h3>

        <input
          id="userName"
          value={userName}
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />

        <button
          type="submit"
          onClick={() => {
            alert(`Welcome ${userName}`)
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignIn
