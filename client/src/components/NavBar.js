import logo from '../images/appLogo.jpeg'
import TimeAndDate from './TimeAndDate'
import SignIn from './SignIn'
import styles from './StockPicker.scss'

const NavBar = () => {
  return (
    <div className='navBar'>
      <img src={logo} alt='cat' />
      <h1>Stock Speculator</h1>
      <TimeAndDate />
      <SignIn />

    </div>
  )
}

export default NavBar
