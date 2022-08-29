import logo from '../images/appLogo.jpeg'
import TimeAndDate from './TimeAndDate'
import UserProfile from './UserProfile'

const NavBar = () => {
  return (
    <div className='navBar'>
      <img src={logo} alt='cat' />
      <h1>Stock Speculator</h1>

      <TimeAndDate />
      <UserProfile />

    </div>
  )
}

export default NavBar
