import * as React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { Power } from '../../../../model/power.model';
import { PowersDisplayRowComponent } from './power-display-row/powers-display-row.component';
import Character from '../../../../model/character.model';
import { PowersDisplayRowEditingComponent } from './power-display-row/powers-display-row-editing.component';
import { IPowerMechanicsState } from '../../../../reducers';
import { PowerMechanic } from '../../../../model/power-mechanic.model';
import { addPower } from '../../../../actions/characters/characters.actions';


interface IPowerDisplayProps {
  powers: Power[],
  characterId: number,
  editing?: {
    isEditing: boolean,
    powerMechanics: PowerMechanic[],
    addPower: (power: Power) => void,
    updatePower: (power: Partial<Power>) => void,
    deletePower: (powerId: number) => void,
  }
}

export class PowersDisplayComponent extends React.Component<IPowerDisplayProps, any> {

  constructor(props) {
    super(props);
  }

  addPower = () => {
    const power: Power = new Power(undefined, "New Power", undefined, this.props.characterId);
    this.props.editing && this.props.editing.addPower(power);
  }

  public render() {
    const highestPowerRank = this.props.powers.reduce((acc, cur) => {
      return cur.rank > acc
        ? cur.rank
        : acc
    }, 0)
    const { editing } = this.props;
    return <>
      {
        this.props.powers.map(power => {
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
          <button className="btn origin-btn" onClick={this.addPower}>New Power</button>
      }
    </>
  }
}

