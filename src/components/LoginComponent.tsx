import React, { Component } from "react";
import { Jumbotron, Nav, NavItem, Navbar } from "reactstrap";
// import { NavLink } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Spartan Calisthenics</h1>
                <h2>A better way to train.</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <Nav navbar style={{ marginRight: "auto" }}>
              <NavItem>
                {/* <LoginModal
                  renderLogin={(toggleLogin) => (
                    <NavLink
                      onClick={toggleLogin}
                      className="nav-link logged-out"
                      data-target="modal-login"
                      to="#"
                    >
                      Login
                    </NavLink>
                  )}
                /> */}
              </NavItem>
              <NavItem>
                {/* <SignupModal
                  renderSignup={(toggleSignup) => (
                    <NavLink
                      onClick={toggleSignup}
                      className="nav-link logged-out"
                      data-target="modal-signup"
                      to="#"
                    >
                      Sign up
                    </NavLink>
                  )}
                /> */}
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Login;
