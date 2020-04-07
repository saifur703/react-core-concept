import React, { Component } from 'react';

class SimpleTimer extends Component {
  state = {
    count: 0,
  };
  incrementHandle = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrementHandle = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  intervalId = null;
  startTimer = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert('Timer is finished.');
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1000);
    }
  };
  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      alert('Timer is Stoped!');
    }
  };
  clearTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  css = {
    padding: '7px 35px',
    margin: '0 10px',
  };
  render() {
    return (
      <div style={{ border: '1px solid #ddd', padding: '20px' }}>
        <h2>Simple Timer Project</h2>
        <button onClick={this.decrementHandle} style={this.css}>
          -
        </button>
        <span style={this.css}>Count: {this.state.count}</span>
        <button onClick={this.incrementHandle} style={this.css}>
          +
        </button>
        <hr />
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.clearTimer}>Reset</button>
      </div>
    );
  }
}
export default SimpleTimer;
