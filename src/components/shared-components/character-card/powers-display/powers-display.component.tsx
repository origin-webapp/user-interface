import * as React from 'react';
import { Power } from '../../../../model/power.model';
import { PowersDisplayRowComponent } from './powers-display-row.component';


interface IPowerDisplayProps {
  powers: Power[]
}

export class PowersDisplayComponent extends React.Component<IPowerDisplayProps, any> {

  constructor(props) {
    super(props);
  }

  public render() {
    const highestPowerRank = this.props.powers.reduce((acc, cur) => {
      return cur.rank > acc 
                ? cur.rank
                : acc
    }, 0)
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
            this.props.powers.map(power =>
              <PowersDisplayRowComponent power={power}
                highestPowerRank={highestPowerRank}
                key={'power-' + power.id} />
            )
          }
        </tbody>
      </table>
    );
  }
}
