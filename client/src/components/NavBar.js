import logo from '../images/appLogo.jpeg'

const NavBar = () => {
  return (
    <div className='navBar'>
      <img src={logo} alt='cat' />
      <h1>Stock Speculator</h1>
    </div>
  )
}

export default NavBar
