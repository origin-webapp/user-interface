import * as React from 'react';
import { Power } from '../../../model/power.model';
import Tooltip from 'reactstrap/lib/Tooltip';

interface IProps {
  power: Power
}

export class AbilitiesDisplayRowComponent extends React.Component<IProps, any> {

  constructor(props) {
    super(props);
    this.state = {
      showToolTip: false
    }
  }

  public toggleToolTip = () => {
    this.setState({
      ...this.state,
      showToolTip: !this.state.showToolTip
    })
  }

  public render() {
    const {power} = this.props;
    return (
      <>
        <tr id={`ability-${power.id}-row`} onClick={this.toggleToolTip}>
          <td className="ability-name">{power.name}</td>
          <td className="ability-power">{power.level}</td>
          <td className="ability-mechanic">{power.mechanic.name}</td>
        </tr>
        <Tooltip placement="top" isOpen={this.state.showToolTip} target={`ability-${power.id}-row`} >
          {power.mechanic.description}
        </Tooltip>
      </>
    );
  }
}

