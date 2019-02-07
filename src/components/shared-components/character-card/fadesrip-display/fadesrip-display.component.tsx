import * as React from 'react';

import { GiMailedFist, GiPocketBow, GiRunningShoe, GiHeartBeats, GiWeightLiftingUp, GiJigsawPiece, GiSheikahEye, GiPsychicWaves } from '../../../../assets/icons';
import CharacterStats from 'src/model/character-stats.model';


interface IFadesripProps {
  stats: CharacterStats
}

export class FadesripDisplayComponent extends React.PureComponent<IFadesripProps> {

  public render() {
    const stats = this.props.stats;
    return (

      <div id="fadesrip-container">
        <div className="flex-col">
          <GiMailedFist className="fadesrip-icon" />
          <p>
            {stats.fighting}
          </p>
        </div>
        <div className="flex-col">
          <GiRunningShoe className="fadesrip-icon" />
          <p>
            {stats.agility}
          </p>
        </div>
        <div className="flex-col">
          <GiPocketBow className="fadesrip-icon" />
          <p>
            {stats.dexterity}
          </p>
        </div>
        <div className="flex-col">
          <GiHeartBeats className="fadesrip-icon" />
          <p>
            {stats.endurance}
          </p>
        </div>
        <div className="flex-col">
          <GiWeightLiftingUp className="fadesrip-icon" />
          <p>
            {stats.strength}
          </p>
        </div>
        <div className="flex-col">
          <GiJigsawPiece className="fadesrip-icon" />
          <p>
            {stats.reason}
          </p>
        </div>
        <div className="flex-col">
          <GiPsychicWaves className="fadesrip-icon" />
          <p>
            {stats.intuition}
          </p>
        </div>
        <div className="flex-col">
          <GiSheikahEye className="fadesrip-icon" />
          <p>
            {stats.psyche}
          </p>
        </div>
      </div>
    );
  }
}

