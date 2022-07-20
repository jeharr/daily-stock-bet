import React from "react"
import logo from '../images/stockLogo.jpeg'

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <img alt={logo} src={logo} />
      </div>
    )
  }
}

export default NavBar
