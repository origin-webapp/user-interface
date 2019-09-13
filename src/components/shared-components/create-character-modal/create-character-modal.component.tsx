import * as React from 'react';

import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  InputGroup, InputGroupText, InputGroupAddon, Input
} from 'reactstrap';
import { ICreateCharacterModal } from './create-character-modal.container';
import Character from '../../../model/character.model';
import { Stats } from 'fs';
import CharacterStats from '../../../model/character-stats.model';
import { FadesripDisplayComponent } from '../character-card/fadesrip-display/fadesrip-display.component';


const inputNames = {
  NAME: 'NEW_CHARACTER_NAME',
  STATS: 'NEW_CHARACTER_STATS'
}


export class CreateCharacterModal extends React.Component<ICreateCharacterModal, any> {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  updateNewCharacterInfo = (e) => {
    console.log(e);
    let updatedNewCharacter = this.props.createCharacter.newCharacter;
    updatedNewCharacter = updatedNewCharacter || { ... new Character(), creator: this.props.authState.currentUser.username } // update when get logged in character
    switch (e.target.name) {
      case inputNames.NAME:
        updatedNewCharacter = {
          ...updatedNewCharacter,
          name: e.target.value
        }
        break;
      case inputNames.STATS:
        updatedNewCharacter = {
          ...updatedNewCharacter,
          stats: e.target.value
        }
        break;
      default:
        break;
    }
    this.props.updateNewCharacter(updatedNewCharacter)
  }

  updateFadesRip = (s: CharacterStats) => {
    this.updateNewCharacterInfo({target: {
      name: inputNames.STATS,
      value: s
    }})
  }

  saveNewCharacter = (e) => {
    e.preventDefault();
    console.log('saving')
    this.props.saveCharacter(this.props.createCharacter.newCharacter);
  }



  render() {

    const { createCharacter } = this.props;
    return (
      <Modal isOpen={this.props.createCharacter.enabled}>
        <form onSubmit={this.saveNewCharacter}>
          <ModalHeader className="rev-background-color">Create Character</ModalHeader>
          <ModalBody>
            <div className="responsive-modal-row">
              <InputGroup className="responsive-modal-row-item">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Character Name</InputGroupText>
                </InputGroupAddon>
                <Input name={inputNames.NAME}
                  onChange={this.updateNewCharacterInfo}
                  value={createCharacter.newCharacter ? createCharacter.newCharacter.name : ''}
                  valid={!!createCharacter.newCharacter && !!createCharacter.newCharacter.name}
                  invalid={!createCharacter.newCharacter || !createCharacter.newCharacter.name} />
              </InputGroup>
            </div>
            <div className="responsive-modal-row">
              <InputGroup className="responsive-modal-row-item">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Starting Stats</InputGroupText>
                </InputGroupAddon>
                <FadesripDisplayComponent
                  stats={createCharacter.newCharacter ? createCharacter.newCharacter.stats : new CharacterStats}
                  editing={{ isEditing: true, updateStats: this.updateFadesRip  }}
                />

              </InputGroup>
            </div>
          </ModalBody>
          <ModalFooter id="create-character-modal-footer">
            <Button type="submit" className="rev-btn">Save</Button>{' '}
            <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>

    );
  }
}