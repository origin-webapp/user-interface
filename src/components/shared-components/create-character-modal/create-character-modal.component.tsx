import * as React from 'react';
import { Button, Input, InputGroup, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import CharacterStats from '../../../model/character-stats.model';
import Character from '../../../model/character.model';
import { FadesripDisplayComponent } from '../character-card/fadesrip-display/fadesrip-display.component';
import { PowersDisplayComponent } from '../character-card/powers-display/powers-display.component';
import { ICreateCharacterModal } from './create-character-modal.container';
import { Power } from '../../../model/power.model';


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
    this.updateNewCharacterInfo({
      target: {
        name: inputNames.STATS,
        value: s
      }
    })
  }

  addPower = (power: Partial<Power>) => {
    this.props.updateNewCharacter({
      ...this.props.createCharacter.newCharacter,
      powers: [...this.props.createCharacter.newCharacter.powers, power]
    })
  }

  saveNewCharacter = (e) => {
    e.preventDefault();
    console.log('saving')
    this.props.saveCharacter(this.props.createCharacter.newCharacter);
  }



  render() {

    const { createCharacter } = this.props;

    const {addPower} = this;
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
                  editing={{ isEditing: true, updateStats: this.updateFadesRip }}
                />

              </InputGroup>
              <div className="responsive-modal-row">
                <InputGroup className="responsive-modal-row-item">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Starting Powers</InputGroupText>
                  </InputGroupAddon>
                  <PowersDisplayComponent
                    {...createCharacter}
                    editing={
                      {
                        isEditing: true,
                        powerMechanics: [],
                        addPower,
                        updatePower: (power: Partial<Power>) => {},
                        deletePower: (powerId: number) => {},
                        deleteCharacter: (characterId: number) => {}
                      }
                    }
                    powers={createCharacter.newCharacter.powers}
                    characterId={createCharacter.newCharacter.id} />
                </InputGroup>
              </div>
            </div>
          </ModalBody>
          <ModalFooter id="create-character-modal-footer">
            <Button type="submit" className="rev-btn">Save</Button>{' '}
            <Button color="secondary" onClick={() => this.props.toggleModal('')}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>

    );
  }
}