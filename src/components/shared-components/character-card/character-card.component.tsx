import * as React from 'react';

import { FadesripDisplayComponent } from './fadesrip-display/fadesrip-display.component';
import { PowersDisplayComponent } from './powers-display/powers-display.component';
import Character from '../../../model/character.model';

import { FaUserEdit } from 'react-icons/fa'
import { CharacterNavComponent } from './character-nav/character-nav.component';
import { GiHamburger } from 'react-icons/gi';
import { updateStats } from '../../../actions/my-characters/my-characters.actions';
import CharacterStats from '../../../model/character-stats.model';

export interface ICharacterCardComponentProps {
  character: Character,
  editing? : {
    isEditing: boolean,
    toggleIsEditing: (isEditing: boolean) => void,
    updateStats: (stats: CharacterStats) => void
  }
}

export class CharacterCardComponent extends React.PureComponent<ICharacterCardComponentProps> {

  public render() {
    const { character, editing } = this.props; 
    return (
      <div id="character-card" style={{width: '75rem'}}>
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
                <FaUserEdit onClick={() => editing.toggleIsEditing && editing.toggleIsEditing(!editing.isEditing)} />
            }
          </div>
        </div>
        <div className="card-header">
          <CharacterNavComponent />
        </div>
        <div className="card-body">
          <FadesripDisplayComponent 
            stats={character.stats} 
            editing={ editing && {isEditing: editing.isEditing, updateStat: editing.updateStats}}
          />
        </div>
        <div className="card-body">
          <PowersDisplayComponent powers={character.powers} />
        </div>
      </div>
    );
  }
}

