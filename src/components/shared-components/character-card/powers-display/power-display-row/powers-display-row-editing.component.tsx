import * as React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Power } from '../../../../../model/power.model';
import Dropdown from 'reactstrap/lib/Dropdown';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import { PowerMechanic } from '../../../../../model/power-mechanic.model';

interface IProps {
  power: Power,
  highestPowerRank: number,
  editing: {
    powerMechanics: PowerMechanic[],
    updatePower: (power: Partial<Power>) => void,
    deletePower: (powerId: number) => void
  }
}

export const PowersDisplayRowEditingComponent: React.FunctionComponent<IProps> = (props) => {

  const { power, editing } = props;

  const [showPowerMechanicDropdown, setShowPowerMechanicDropdown] = React.useState(false);
  const [showToolTip, setShowToolTip] = React.useState(false);

  function updatePower(e) {
    e.preventDefault();
    const updatedPower = {
      ...props.power,
      [e.target.name]: e.target.value
    }
    console.log(updatedPower);
    props.editing && props.editing.updatePower(updatedPower);
  }

  function updatePowersMechanic(mechanic: PowerMechanic) {
    const updatedPower = {
      id: power.id,
      mechanicId: mechanic.id
    }
    props.editing && props.editing.updatePower(updatedPower);
  }

  
  return (
    <>
      <tr id={`power-${power.id}-row`}
        onClick={() => setShowToolTip(!showToolTip)}>
        <td className="power-name">
          <FaTrash className="cursor-hover" 
            style={{marginRight: "0.4em"}}
            onClick={() => editing.deletePower(power.id)} />
          <input type="text" name="name" defaultValue={power.name} onBlur={updatePower} />
        </td>
        <td className="power-rank">
          <input type="number" name="rank" defaultValue={'' + power.rank} onBlur={updatePower} />
        </td>
        <td className="power-mechanic">
          <Dropdown isOpen={showPowerMechanicDropdown} toggle={() => setShowPowerMechanicDropdown(!showPowerMechanicDropdown)}>
            <DropdownToggle caret className="btn btn-light">
              {power.mechanic && power.mechanic.name || 'None Selected'}
            </DropdownToggle>
            <DropdownMenu>
              {
                editing.powerMechanics.map(mechanic => 
                  <DropdownItem key={'mechanic-' + mechanic.id} onClick={() => updatePowersMechanic(mechanic)} >{mechanic.name}</DropdownItem>
                )
              }
            </DropdownMenu>
          </Dropdown>
        </td>
      </tr>
    </>
  );
}

