import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App";

class TwentyNine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default TwentyNine;
