import { Component } from "react";
// class component

export default class StateDemo extends Component{

    constructor(props){
        super(props);
        this.state={count:0 };
    }

    increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // decrement function
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  


    


  render() {
    return (
      <>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </>
    );
  }
}