import React, { Component } from "react";

export default class Hello extends Component {
  render() {
    return (
      <div className="text-center">
        <h2>This is the state:{this.props.value} </h2>
        <button className="btn btn-primary m-1" onClick={this.props.onIncrement}>Increment</button>
        <button className="btn btn-info m-1" onClick={this.props.onDecrement}>Decrement</button>
      </div>
    );
  }
}
