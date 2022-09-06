import logo from '../images/appLogo.jpeg'
import TimeAndDate from './TimeAndDate'
import SignIn from './SignIn'

const NavBar = () => {
  return (
    <div className='navBar'>
      <img src={logo} alt='' className='logo' />
      <h1 className='header'>Stock Speculator</h1>
      <div className='signIn'>
        <TimeAndDate />
        <SignIn />
      </div>

    </div>
  )
}

export default NavBar
