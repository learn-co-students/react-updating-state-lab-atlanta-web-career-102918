// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    this.setState ({
      timesClicked: this.state.timesClicked +1
    })
  }

  render() {
    return (
      <div>
        Times clicked:
        <button onClick={this.handleClick}>Click: {this.state.timesClicked}</button>
      </div>
    );
  }

}
