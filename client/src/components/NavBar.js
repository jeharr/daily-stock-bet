import React from "react"
import { Link } from 'react-router-dom'
import logo from '../images/stockLogo.jpeg'

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <img alt={logo} src={logo} />
        <Link to="/home">Home</Link>
      </div>
    )
  }
}

export default NavBar
