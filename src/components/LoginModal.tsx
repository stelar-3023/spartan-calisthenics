import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
} from "reactstrap";
import fire from "../config/fire";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoginOpen: false,
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin = () => {
    this.setState({
      isLoginOpen: !this.state.isLoginOpen,
    });
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  login(event) {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === "auth/invalid-email") {
          alert(errorMessage);
        } else {
          alert(errorMessage);
        }
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.renderLogin(this.toggleLogin)}
        <Modal
          id="modal-login"
          className="modal"
          isOpen={this.state.isLoginOpen}
          centered={true}
          toggle={this.toggleLogin}
        >
          <ModalBody className="modal-content">
            <h4>Login</h4>
            <br />
            <Form id="login-form">
              <FormGroup className="input-field">
                <Label for="login-email">Email Address</Label>
                <Input
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  data-testid="email-input"
                  autoComplete="on"
                  id="login-email"
                  placeholder="email"
                  required
                />
              </FormGroup>
              <FormGroup className="input-field">
                <Label for="login-password">Your password</Label>
                <Input
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  autoComplete="off"
                  id="login-password"
                  placeholder="password"
                  required
                />
                <br />
                <Button
                  type="submit"
                  onClick={this.login}
                  color="danger"
                  size="sm"
                >
                  Login
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default LoginModal;
