import * as React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  InputGroup, InputGroupText, InputGroupAddon, Input
} from 'reactstrap';
import { ICreateUserModal } from './create-user-modal.container';


const inputNames = {
  EMAIL: 'NEW_USER_EMAIL',
  FIRST_NAME: 'NEW_USER_FIRST_NAME',
  LAST_NAME: 'NEW_USER_LAST_NAME',
  PHONE: 'NEW_USER_PHONE'
}


export class CreateUserModal extends React.Component<ICreateUserModal, any> {
  constructor(props) {
    super(props);
  }

  updateNewUserInfo = (e) => {
    let updatedNewUser = this.props.createUser.newUser;
    switch (e.target.name) {
      case inputNames.EMAIL:
        updatedNewUser = {
          ...updatedNewUser,
          email: e.target.value
        }
        break;
      case inputNames.FIRST_NAME:
        updatedNewUser = {
          ...updatedNewUser,
          firstName: e.target.value
        }
        break;
      case inputNames.LAST_NAME:
        updatedNewUser = {
          ...updatedNewUser,
          lastName: e.target.value
        }
        break;
      case inputNames.PHONE:
        updatedNewUser = {
          ...updatedNewUser,
          phoneNumber: e.target.value
        }
        break;
      default:
        break;
    }
    this.props.updateNewUser(updatedNewUser)
  }

  saveNewUser = (e) => {
    e.preventDefault();
    console.log('saving')
    this.props.saveUser(this.props.createUser.newUser);
  }



  render() {

    const { createUser } = this.props;
    return (
      <Modal isOpen={this.props.createUser.enabled}>
        <form onSubmit={this.saveNewUser}>
          <ModalHeader className="rev-background-color">Modal title</ModalHeader>
          <ModalBody>
            <div className="responsive-modal-row">
              <InputGroup className="responsive-modal-row-item">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Email</InputGroupText>
                </InputGroupAddon>
                <Input name={inputNames.EMAIL}
                  onChange={this.updateNewUserInfo}
                  value={createUser.newUser.email}
                  valid={!!createUser.newUser.email}
                  invalid={!createUser.newUser.email} />
              </InputGroup>
            </div>
            <div className="responsive-modal-row">
              <Input name={inputNames.FIRST_NAME}
                className="responsive-modal-row-item"
                placeholder="First Name"
                onChange={this.updateNewUserInfo}
                value={createUser.newUser.firstName}
                valid={!!createUser.newUser.firstName}
                invalid={!createUser.newUser.firstName} />

              <Input name={inputNames.LAST_NAME}
                className="responsive-modal-row-item"
                placeholder="Last Name"
                onChange={this.updateNewUserInfo}
                value={createUser.newUser.lastName}
                valid={!!createUser.newUser.lastName}
                invalid={!createUser.newUser.lastName} />
            </div>
            <div className="responsive-modal-row">
              <InputGroup className="responsive-modal-row-item">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Phone Number</InputGroupText>
                </InputGroupAddon>
                <Input type="number"
                  name={inputNames.PHONE}
                  onChange={this.updateNewUserInfo}
                  value={createUser.newUser.phoneNumber}
                  valid={!!createUser.newUser.phoneNumber}
                  invalid={!createUser.newUser.phoneNumber} />

              </InputGroup>
            </div>
          </ModalBody>
          <ModalFooter id="create-user-modal-footer">
            <Button type="submit" className="rev-btn">Save</Button>{' '}
            <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>

    );
  }
}

