import * as React from 'react';

import { FadesripDisplayComponent } from './fadesrip-display/fadesrip-display.component';
import { PowersDisplayComponent } from './powers-display/powers-display.component';
import Character from 'src/model/character.model';

export interface ICharacterCardComponentProps {
  character: Character,
}

export class CharacterCardComponent extends React.PureComponent<ICharacterCardComponentProps> {



  public render() {
    const character = this.props.character;
    return (
      <div id="character-card" className="card text-center">
        <div className="card-header">
          {character.name}
        </div>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Character</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Abilities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" aria-disabled="true">About</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <FadesripDisplayComponent stats={character.stats} />
        </div>
        <div className="card-body">
          <PowersDisplayComponent powers={character.powers} />
        </div>
      </div>
    );
  }
}

