import * as React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { GiHamburger } from 'react-icons/gi';
import CharacterStats from '../../../model/character-stats.model';
import Character from '../../../model/character.model';
import { Power } from '../../../model/power.model';
import { CharacterNavComponent } from './character-nav/character-nav.component';
import { FadesripDisplayComponent } from './fadesrip-display/fadesrip-display.component';
import { PowersDisplayComponent } from './powers-display/powers-display.component';


export interface ICharacterCardComponentProps {
  character: Character,
  editing?: {
    isEditing: boolean,
    toggleIsEditing: (isEditing: boolean) => void,
    updateStats: (stats: CharacterStats) => void,
    addPower: (power: Power) => void,
    updatePower: (power: Partial<Power>) => void,
    deletePower: (powerId: number) => void,
  }
}

export class CharacterCardComponent extends React.PureComponent<ICharacterCardComponentProps> {

  public render() {
    const { character, editing } = this.props;
    return (
      <div id="character-card" className="card">
        <div className="card-header character-card-name-bar">
          <div>
            <GiHamburger />
          </div>
          <div>
            {character.name}
          </div>
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
        <div className="card-body">
          <PowersDisplayComponent characterId={character.id} powers={character.powers} editing={editing} />
        </div>
      </div>
    );
  }
}

