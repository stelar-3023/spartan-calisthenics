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
import { v4 as uuid4 } from "uuid";
import firebase from "../config/fire";

class WorkoutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      exercise: "",
      reps: 0,
      isLogWorkoutOpen: false,
    };
    this.exerciseRef = firebase
      .firestore()
      .collection("workouts")
      .doc(props.user.uid);
    // bind methods
    this.handleChange = this.handleChange.bind(this);
    this.addExercise = this.addExercise.bind(this);
  }

  toggleWorkout = () => {
    this.setState({
      isLogWorkoutOpen: !this.state.isLogWorkoutOpen,
    });
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  getWorkouts() {
    this.exerciseRef.onSnapshot((snapshot) => {
      console.log(snapshot);
      let workouts = snapshot.data().exercises;
      console.log(workouts);
      this.setState({ workouts });
    });
  }

  addExercise(event) {
    event.preventDefault();
    this.exerciseRef.set(
      {
        exercises: [
          ...this.state.workouts,
          {
            exercise: this.state.exercise,
            reps: this.state.reps,
            id: uuid4(),
          },
        ],
      },
      { merge: true }
    );
    this.toggleWorkout();
    this.setState({
      exercise: "",
      reps: 0,
    });
  }

  componentDidMount() {
    this.getWorkouts();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.renderWorkout(this.toggleWorkout)}
        <Modal
          id="modal-exercise"
          className="modal"
          isOpen={this.state.isLogWorkoutOpen}
          centered={true}
          toggle={this.toggleWorkout}
        >
          <ModalBody>
            <h4>Add Exercises</h4>
            <br />
            <Form id="exercise-form">
              <FormGroup className="input-field">
                <Label for="exercise">Exercise</Label>
                <Input
                  value={this.state.exercise}
                  onChange={this.handleChange}
                  type="text"
                  name="exercise"
                  autoComplete="off"
                  id="exercise"
                  placeholder="exercise"
                  required
                />
              </FormGroup>
              <FormGroup className="input-field">
                <Label for="repetitions">Reps</Label>
                <Input
                  value={this.state.reps}
                  onChange={this.handleChange}
                  type="number"
                  name="reps"
                  autoComplete="off"
                  id="reps"
                  placeholder="reps"
                  required
                />
                <br />
                <Button
                  onClick={this.addExercise}
                  type="submit"
                  color="danger"
                  size="sm"
                >
                  Add Exercise
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default WorkoutModal;
