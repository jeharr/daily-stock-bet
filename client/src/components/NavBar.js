import React from "react"
import logo from '../images/stockLogo.jpeg'

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <img alt={logo} src={logo} />
        <h1>Stock Speculator</h1>
      </div>
    )
  }
}

export default NavBar
