import React, { useState, useEffect } from "react";

const inputStyle = {
  width: 235,
  margin: 5
}

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      randomIndex: ''
    }
    this.ask = this.ask.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  ask() {
    if (this.state.userInput) {
      this.setState(
        {
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ""
        }
      )
    }
  }
  handleChange(event) {
    this.setState(
      {
        userInput: event.target.value
      }
    )
  }

  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ]

    const answer = possibleAnswers[this.state.randomIndex]

    return (
      <div>
        <div>
          <br />
          <button onClick={this.ask}>
            <h3>
              Ask the Magic Eight Ball
            </h3>
            <img src="https://appinventor.mit.edu/explore/sites/all/files/ai2tutorials/magic8ball/magic8ball.jpg" alt="blahblah">
            </img>
            <h3>Answer:</h3>
            <p>{answer}</p>
          </button>
          <br />
          <input
            type="text"
            placeholder="type your question here"
            value={this.state.userInput}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>
      </div>
    )
  }
}

export default MagicEightBall
