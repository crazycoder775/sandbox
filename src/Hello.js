import React, { Component } from "react";

export default class Hello extends Component {
  render() {
    return (
      <div>
        <p>This is the state:{this.props.value} </p>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
      </div>
    );
  }
}
