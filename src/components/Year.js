import React, { Component } from 'react';

export default class Year extends Component {

  onButtonClick = event => this.props.setYear(event.target.textContent)

  render() {
    return (
      <div className="App">
        <button onClick={this.onButtonClick}>1975</button>
        <button onClick={this.onButtonClick}>1991</button>
        <button onClick={this.onButtonClick}>1999</button>
        <p>{this.props.year}</p>
      </div>
    );
  }
}
