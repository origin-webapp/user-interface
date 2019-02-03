import * as React from 'react';
import { Power } from '../../../model/power.model';
import { PowerMechanic } from '../../../model/power-mechanic.model';
import { AbilitiesDisplayRowComponent } from './abilities-display-row.component';



export class AbilitiesDisplayComponent extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      powers: [
        new Power(1, 'Ligntning Kunai', 80, new PowerMechanic(1, 'Swift Blast', 'desc', 80, 0)),
        new Power(2, 'Kunai Relocation', 45, new PowerMechanic(2, 'Kunai Relocation', 'desc', 45, 0)),
        new Power(1, 'Ligntning Kunai', 80, new PowerMechanic(1, 'Swift Blast', 'desc', 80, 0)),
        new Power(1, 'Ligntning Kunai', 80, new PowerMechanic(1, 'Swift Blast', 'desc', 80, 0)),
      ]
    }
  }

  public render() {
    return (
      <table className="table">
        <tbody>
          {
            this.state.powers.map(power =>
              <AbilitiesDisplayRowComponent power={power} key={'power-' + power.id} />
            )
          }
        </tbody>
      </table>
    );
  }
}

