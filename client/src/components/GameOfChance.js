import React, { useState, useEffect } from "react";

class Result extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const result = this.props.fiftyFifty
    return (
      <h1>{result ? "Place That Bet!" : "Save Your Money!"}</h1>
    )
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => {
      return {
        counter: this.state.counter + 1
      }
    })
  }

  render() {
    const expression = (Math.ceil(Math.random()) >= .5 ? true : false)
    return (
      <div>
        <button onClick={this.handleClick}>Play Again!</button>

        <Result fiftyFifty={expression} />

        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    )
  }
}

export default GameOfChance
