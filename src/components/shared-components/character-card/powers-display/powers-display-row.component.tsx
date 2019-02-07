import * as React from 'react';
import { Power } from '../../../../model/power.model';
import { Popover, PopoverBody, Row, Col } from 'reactstrap';
import PopoverHeader from 'reactstrap/lib/PopoverHeader';

interface IProps {
  power: Power,
  highestPowerRank: number
}

export class PowersDisplayRowComponent extends React.Component<IProps, any> {

  constructor(props) {
    super(props);
    this.state = {
      showToolTip: false,
    }
  }

  public toggleToolTip = () => {
    this.setState({
      ...this.state,
      showToolTip: !this.state.showToolTip
    })
  }

  public render() {
    const {power, highestPowerRank} = this.props;
    return (
      <>
        <tr id={`power-${power.id}-row`} 
          onClick={this.toggleToolTip}>
          <td className="power-name">{power.name}</td>
          <td className="power-rank">{power.rank ? power.rank : ''}</td>
          <td className="power-mechanic">{power.mechanic.name}</td>
        </tr>
        <Popover placement="top" isOpen={this.state.showToolTip} target={`power-${power.id}-row`} onClick={this.toggleToolTip}>
          <PopoverHeader>{power.name}</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col>
                Well Cost: {
                  power.mechanic.costScalesWithMaxAbility
                    ? power.mechanic.wellCostMultiplier * highestPowerRank
                    : power.mechanic.wellCostMultiplier * power.rank
                }
              </Col>
            </Row>
          </PopoverBody>
        </Popover>
      </>
    );
  }
}

