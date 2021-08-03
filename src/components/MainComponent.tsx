import React, { Component } from "react";
import fire from "../config/fire";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./LoginComponent";
import Home from "./HomeComponent";
import exercise from "../img/exercise.jpg";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <Router>
        {this.state.user ? <Home user={this.state.user} /> : <Login />}
        <img src={exercise} alt="" />
      </Router>
    );
  }
}

export default Main;
