import * as React from 'react';

import { GiMailedFist, GiPocketBow, GiRunningShoe, GiHeartBeats, GiWeightLiftingUp, GiJigsawPiece, GiSheikahEye, GiPsychicWaves } from 'react-icons/gi';
import CharacterStats from '../../../../model/character-stats.model';


interface ICharacterNavProps {

}

export class CharacterNavComponent extends React.PureComponent<ICharacterNavProps> {

  public render() {
    return (
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
    );
  }
}

