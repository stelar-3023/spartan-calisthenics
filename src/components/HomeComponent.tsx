import React, { Component } from "react";
import { Jumbotron, Nav, NavItem, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import AccountModal from "./AccountDetailsModal";
import WorkoutModal from "./LogWorkoutModal";
import LogModal from "./LogModal";
import Signup from "./SignupModal";

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="header">Spartan Calisthenics</h1>
                <h2>A better way to train.</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <Nav
              navbar
              style={{
                marginRight: "auto",
              }}
            >
              <NavItem>
                <AccountModal
                  user={this.props.user}
                  renderAccount={(toggleAccount) => (
                    <NavLink
                      onClick={toggleAccount}
                      className="nav-link logged-in"
                      data-target="modal-account"
                      to="#"
                    >
                      Account
                    </NavLink>
                  )}
                />
              </NavItem>
              <NavItem>
                <WorkoutModal
                  user={this.props.user}
                  renderWorkout={(toggleWorkout) => (
                    <NavLink
                      onClick={toggleWorkout}
                      className="nav-link logged-in"
                      to="#"
                      data-target="modal-exercise"
                    >
                      Log Workout
                    </NavLink>
                  )}
                />
              </NavItem>
              <NavItem>
                <LogModal
                  user={this.props.user}
                  renderLog={(toggleLog) => (
                    <NavLink
                      onClick={toggleLog}
                      className="nav-link logged-in"
                      to="#"
                      data-target="modal-log"
                    >
                      Log
                    </NavLink>
                  )}
                />
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={this.handleLogout}
                  className="nav-link logged-in"
                  to="#"
                >
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Home;
