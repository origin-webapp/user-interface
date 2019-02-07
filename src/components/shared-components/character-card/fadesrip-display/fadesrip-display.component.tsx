import * as React from 'react';

import { GiMailedFist, GiPocketBow, GiRunningShoe, GiHeartBeats, GiWeightLiftingUp, GiJigsawPiece, GiSheikahEye, GiPsychicWaves } from '../../../../assets/icons';
import CharacterStats from 'src/model/character-stats.model';


interface IFadesripProps {
  stats: CharacterStats
}

export class FadesripDisplayComponent extends React.PureComponent<IFadesripProps> {

  getStatAndBonus(stat: number) {
    return (
      <>
        <div>
          {stat}
        </div>
        <div>
          +{Math.floor(stat * 3 / 10)}
        </div>
      </>
    )
  }

  public render() {
    const stats = this.props.stats;
    return (

      <div id="fadesrip-container">
        <div className="flex-col">
          <GiMailedFist className="fadesrip-icon" />
          {this.getStatAndBonus(stats.fighting)}
        </div>
        <div className="flex-col">
          <GiRunningShoe className="fadesrip-icon" />
          {this.getStatAndBonus(stats.agility)}
        </div>
        <div className="flex-col">
          <GiPocketBow className="fadesrip-icon" />
          {this.getStatAndBonus(stats.dexterity)}
        </div>
        <div className="flex-col">
          <GiHeartBeats className="fadesrip-icon" />
          {this.getStatAndBonus(stats.endurance)}
        </div>
        <div className="flex-col">
          <GiWeightLiftingUp className="fadesrip-icon" />
          {this.getStatAndBonus(stats.strength)}
        </div>
        <div className="flex-col">
          <GiJigsawPiece className="fadesrip-icon" />
          {this.getStatAndBonus(stats.reason)}
        </div>
        <div className="flex-col">
          <GiPsychicWaves className="fadesrip-icon" />
          {this.getStatAndBonus(stats.intuition)}
        </div>
        <div className="flex-col">
          <GiSheikahEye className="fadesrip-icon" />
          {this.getStatAndBonus(stats.psyche)}
        </div>
      </div>
    );
  }
}

