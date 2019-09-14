import * as React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { GiHamburger } from 'react-icons/gi';
import CharacterStats from '../../../model/character-stats.model';
import Character from '../../../model/character.model';
import { PowerMechanic } from '../../../model/power-mechanic.model';
import { Power } from '../../../model/power.model';
import { CharacterNavComponent } from './character-nav/character-nav.component';
import { FadesripDisplayComponent } from './fadesrip-display/fadesrip-display.component';
import { PowersDisplayComponent } from './powers-display/powers-display.component';
import Input from 'reactstrap/lib/Input';
import { HealthDisplayComponent } from './health-display/health-display.component';
import { deleteCharacter } from '../../../actions/characters/characters.actions';


export interface ICharacterCardComponentProps {
  character: Character,
  editing?: {
    isEditing: boolean,
    powerMechanics: PowerMechanic[],
    toggleIsEditing: (isEditing: boolean) => void,
    updateStats: (stats: CharacterStats) => void,
    addPower: (power: Power) => void,
    updatePower: (power: Partial<Power>) => void,
    deletePower: (powerId: number) => void,
    updateCharacter: (character: Partial<Character>) => void,
    deleteCharacter: (characterId: number) => void
  }
}

export class CharacterCardComponent extends React.PureComponent<ICharacterCardComponentProps> {


  updateCharacter = (e) => {
    const updatedCharacter = {
      id: this.props.character.id,
      [e.target.name]: e.target.value
    }
    this.props.editing && this.props.editing.updateCharacter(updatedCharacter);

  }

  calculateTotalWell = () => {

    let greatestPower = 0;

    for (let power of this.props.character.powers) {
      if (power.rank > greatestPower) {
        greatestPower = power.rank;
      }
    }
    return greatestPower * this.props.character.well_multiplier;
  }

  public render() {
    const { character, editing } = this.props;
    return (
      <div id="character-card" className="card">
        <div className="card-header character-card-name-bar">
          <div>
            <GiHamburger />
          </div>
          {
            editing && editing.isEditing
              ? <Input className="character-name-input" type="text" name="name" defaultValue={character.name} onBlur={this.updateCharacter} />
              : <div>
                {character.name}
              </div>
          }
          <div>
            {
              editing &&
              <FaUserEdit
                className="cursor-hover"
                onClick={() => editing.toggleIsEditing && editing.toggleIsEditing(!editing.isEditing)}
              />
            }
          </div>
        </div>
        <div className="card-header">
          <CharacterNavComponent />
        </div>
        <div className="card-body">
          <FadesripDisplayComponent
            stats={character.stats}
            editing={editing}
          />
        </div>
        <div className="card-body character-health-well-karma-bar">
          <div className="flex-col">
            <div className="health-label">Health Points:</div>
            <HealthDisplayComponent character={character} inCampaign={false} />
          </div>
          <div className="flex-col">
            <div className="well-label">Well Multiplier:</div>
            {editing && editing.isEditing
              ? <Input className="character-well-multiplier-input" type="number" name="well_multiplier" defaultValue={'' + character.well_multiplier} onBlur={this.updateCharacter} />
              : <div>
                {character.well_multiplier}
              </div>
            }
          </div>
          <div className="flex-col">
            <div className="total-well-label">Total Well:</div>
            {this.calculateTotalWell()}
          </div>
          <div className="flex-col">
            <div className="karma-label">Karma:</div>
            {editing && editing.isEditing
              ? <Input className="character-karma-input" type="number" name="karma" defaultValue={'' + character.karma} onBlur={this.updateCharacter} />
              : <div>
                {character.karma}
              </div>
            }
          </div>
        </div>
        <div className="card-body character-card-powers">
          <div className="powers-label">Powers:</div>
          <PowersDisplayComponent characterId={character.id} powers={character.powers} editing={editing} />
        </div>

      </div>
    );
  }
}

