import React, { Component } from 'react'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  } handleCount
  handleCountUp = () => {
    this.setState({ counter: this.state.counter + 1 })
  }
  handleCountDown = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container text-center">
          <button onClick={this.handleCountUp} className="my-4 btn btn-outline-success">Count Up</button>
          <h1>{this.state.counter}</h1>
          <button onClick={this.handleCountDown} className="my-4 btn btn-outline-danger">Count Down</button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
