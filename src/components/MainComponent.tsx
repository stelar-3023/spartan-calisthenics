import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./LoginComponent";
// import Home from "./HomeComponent";
import exercise from "../img/exercise.jpg";

class Main extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <Router>
        {<Login />}
        <img src={exercise} alt="" />
      </Router>
    );
  }
}

export default Main;

