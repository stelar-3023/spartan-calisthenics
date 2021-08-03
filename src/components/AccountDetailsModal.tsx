import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";

class AccountModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAccountOpen: false,
    };
    this.toggleAccount = this.toggleAccount.bind(this);
  }

  toggleAccount = () => {
    this.setState({
      isAccountOpen: !this.state.isAccountOpen,
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.renderAccount(this.toggleAccount)}
        <Modal
          id="modal-account"
          className="modal"
          isOpen={this.state.isAccountOpen}
          centered={true}
          toggle={this.toggleAccount}
        >
          <ModalBody className="modal-content">
            <h2>Account Details</h2>
            <br />
            <div className="account-details">
              <h4>{this.props.user.email}</h4>
            </div>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AccountModal;
