import { Component } from "react";

export default class Life extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "nausheen" };
  }

  componentDidMount() {
    console.log("mounting process done");
  }

  componentDidUpdate() {
    console.log("state update");
  }

  componentWillUnmount() {
    console.log("remove from dom");
  }

  render() {
    return (
      <>
        {this.state.name} <br />

        <button onClick={() => this.setState({ name: "uzair" })}>
          change name
        </button>
      </>
    );
  }
}
















