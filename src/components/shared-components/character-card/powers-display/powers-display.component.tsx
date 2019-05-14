import * as React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { Power } from '../../../../model/power.model';
import { PowersDisplayRowComponent } from './powers-display-row.component';
import Character from '../../../../model/character.model';


interface IPowerDisplayProps {
  powers: Power[],
  characterId: number,
  editing?: {
    isEditing: boolean,
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
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="power-name">Power</th>
            <th className="power-rank">Rank</th>
            <th className="power-mechanic">
              Mechanic
              {
                editing && editing.isEditing &&
                  <FaPlusCircle className="cursor-hover" onClick={this.addPower} />
              }
            </th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.powers.map(power =>
              <PowersDisplayRowComponent power={power}
                highestPowerRank={highestPowerRank}
                editing={editing}
                key={'power-' + power.id} />
            )
          }
        </tbody>

      </table>
    );
  }
}

