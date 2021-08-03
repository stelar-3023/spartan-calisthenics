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
import { db } from "../config/fire";

class SignupModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      exercise: "",
      reps: 0,
      isSignupOpen: false,
    };
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  toggleSignup = () => {
    this.setState({
      isSignupOpen: !this.state.isSignupOpen,
    });
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  signup(event) {
    console.log(this.state.email, this.state.password);
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((cred) => {
        return db.collection("workouts").doc(cred.user.uid).set({
          exercises: [],
        });
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          alert(errorMessage);
        } else {
          alert(errorMessage);
        }
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.renderSignup(this.toggleSignup)}
        <Modal
          id="modal-signup"
          className="modal"
          isOpen={this.state.isSignupOpen}
          centered={true}
          toggle={this.toggleSignup}
        >
          <ModalBody className="modal-content">
            <h4>Sign up</h4>
            <br />
            <Form id="signup-form">
              <FormGroup className="input-field">
                <Label for="signup-email">Email address</Label>
                <Input
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  data-testid="email-input"
                  autoComplete="on"
                  id="signup-email"
                  placeholder="email"
                  required
                />
              </FormGroup>
              <FormGroup className="input-field">
                <Label for="signup-password">Choose password</Label>
                <Input
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  autoComplete="on"
                  id="signup-password"
                  placeholder="password"
                  required
                />
              </FormGroup>
              <FormGroup className="input-field">
                <Label for="signup-username">Choose username</Label>
                <Input
                  value={this.state.username}
                  onChange={this.handleChange}
                  type="username"
                  name="username"
                  autoComplete="on"
                  id="signup-username"
                  placeholder="username"
                  required
                />
                <br />
                <Button
                  type="submit"
                  onClick={this.signup}
                  color="danger"
                  size="sm"
                >
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default SignupModal;
