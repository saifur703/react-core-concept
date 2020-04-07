import React, { Component } from 'react';

class StatePractice2 extends Component {
  state = {
    count: 7,
  };
  render() {
    return (
      <div>
        <h2>State Practice by Class Component {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment + 1
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          Decrement - 1
        </button>
      </div>
    );
  }
}
export default StatePractice2;
