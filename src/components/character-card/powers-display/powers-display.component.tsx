import * as React from 'react';
import { Power } from '../../../model/power.model';
import { PowerMechanic } from '../../../model/power-mechanic.model';
import { PowersDisplayRowComponent } from './powers-display-row.component';



export class PowersDisplayComponent extends React.Component<any, any> {

  constructor(props) {
    super(props);
    const powers = [
      new Power(1, 'Ligntning Kunai', 80, new PowerMechanic(1, 'Swift Blast', 'desc', 1, 0)),
      new Power(2, 'Kunai Relocation', 45, new PowerMechanic(2, 'Kunai Relocation', 'desc', 0.2, 0, true)),
      new Power(3, 'Kuni Generation', 55, new PowerMechanic(3, 'Unique Weapon', 'desc', 0, 0)),
      new Power(4, 'Sharingan', 0, new PowerMechanic(4, 'Stat Boost', 'desc', 0.25, 0, true)),
    ];
    const highestPowerRank = powers.reduce((acc, cur) => {
      return cur.rank > acc 
                ? cur.rank
                : acc
    }, 0)
    this.state = {
      highestPowerRank,
      powers,
    }
  }

  public render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="power-name">Power</th>
            <th className="power-rank">Rank</th>
            <th className="power-mechanic">Mechanic</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.powers.map(power =>
              <PowersDisplayRowComponent power={power}
                highestPowerRank={this.state.highestPowerRank}
                key={'power-' + power.id} />
            )
          }
        </tbody>
      </table>
    );
  }
}

