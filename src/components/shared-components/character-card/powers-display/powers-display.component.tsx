import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { Power } from '../../../../model/power.model';
import { PowersDisplayRowComponent } from './power-display-row/powers-display-row.component';
import Character from '../../../../model/character.model';
import { PowersDisplayRowEditingComponent } from './power-display-row/powers-display-row-editing.component';
import { IPowerMechanicsState } from '../../../../reducers';
import { PowerMechanic } from '../../../../model/power-mechanic.model';
import { addPower } from '../../../../actions/characters/characters.actions';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import Button from 'reactstrap/lib/Button';


interface IPowerDisplayProps {
  powers: Power[],
  characterId: number,
  editing?: {
    isEditing: boolean,
    powerMechanics: PowerMechanic[],
    addPower: (power: Power) => void,
    updatePower: (power: Partial<Power>) => void,
    deletePower: (powerId: number) => void,
    deleteCharacter: (characterId: number) => void
  }
}

export const PowersDisplayComponent: React.FunctionComponent<IPowerDisplayProps> = (props) => {

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const addPower = () => {
    const power: Power = new Power(undefined, "New Power", undefined, props.characterId);
    props.editing && props.editing.addPower(power);
  }

  const deleteCharacter = () => {
    props.editing && props.editing.deleteCharacter(props.characterId);
    setShowDeleteModal(false);
  }

  const highestPowerRank = props.powers.reduce((acc, cur) => {
    return cur.rank > acc
      ? cur.rank
      : acc
  }, 0)
  const { editing } = props;

  return <>
    {
      props.powers.map(power => {
        if (editing && editing.isEditing) {
          return <PowersDisplayRowEditingComponent power={power}
            highestPowerRank={highestPowerRank}
            editing={editing}
            key={'power-' + power.id} />
        } else {
          return <PowersDisplayRowComponent power={power}
            highestPowerRank={highestPowerRank}
            key={'power-' + power.id} />
        }
      })
    }
    {
      editing && editing.isEditing &&
      <div id="edit-power-buttons">
        <button type="button" className="btn origin-btn" onClick={addPower}>New Power</button>
        <button className="btn origin-btn-red" onClick={() => setShowDeleteModal(true)}>Delete Character</button>
      </div>
    }

    <Modal isOpen={showDeleteModal} toggle={() => setShowDeleteModal(!showDeleteModal)}>
      <ModalHeader toggle={() => setShowDeleteModal(!showDeleteModal)}>
        Are you sure you wish to delete this character? This operation is final and cannot be reversed.
      </ModalHeader>
      <ModalFooter>
        <Button className="origin-btn-red" onClick={deleteCharacter}>Yes</Button>{' '}
        <Button color="light" onClick={() => setShowDeleteModal(!showDeleteModal)}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </>
}

