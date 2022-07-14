import React from "react"
import logo from '../images/stockLogo.jpeg'

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <button>Home</button>
        <img alt={logo} src={logo} />
        <h1>Company Logo</h1>
      </div>
    )
  }
}

export default NavBar
