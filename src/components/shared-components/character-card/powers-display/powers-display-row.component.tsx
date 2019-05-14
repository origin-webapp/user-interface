import * as React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Col, Popover, PopoverBody, Row } from 'reactstrap';
import PopoverHeader from 'reactstrap/lib/PopoverHeader';
import { Power } from '../../../../model/power.model';

interface IProps {
  power: Power,
  highestPowerRank: number,
  editing?: {
    isEditing: boolean,
    updatePower: (power: Partial<Power>) => void,
    deletePower: (powerId: number) => void
  }
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
    const { power, highestPowerRank, editing } = this.props;
    return (
      <>
        <tr id={`power-${power.id}-row`}
          onClick={this.toggleToolTip}>
          <td className="power-name">
            {editing && editing.isEditing &&
              <FaTrash className="cursor-hover" onClick={() => editing.deletePower(power.id)}/>
            }
            {power.name}
          </td>
          <td className="power-rank">{power.rank ? power.rank : ''}</td>
          <td className="power-mechanic">{power.mechanic && power.mechanic.name}</td>
        </tr>
        <Popover placement="top" isOpen={this.state.showToolTip} target={`power-${power.id}-row`} onClick={this.toggleToolTip}>
          <PopoverHeader>{power.name}</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col>
                {
                  power.mechanic
                    ? <>
                      Well Cost: {
                        power.mechanic.costScalesWithMaxAbility
                          ? power.mechanic.wellCostMultiplier * highestPowerRank
                          : power.mechanic.wellCostMultiplier * power.rank
                      }
                    </>
                    : <>No Mechanic Selected</>
                }

              </Col>
            </Row>
          </PopoverBody>
        </Popover>
      </>
    );
  }
}

