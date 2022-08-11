import logo from '../images/appLogo.jpeg'
import TimeAndDate from './TimeAndDate'

const NavBar = () => {
  return (
    <div className='navBar'>
      <img src={logo} alt='cat' />
      <h1>Stock Speculator</h1>

      <TimeAndDate />

    </div>
  )
}

export default NavBar
