import * as React from 'react';

import { GiMailedFist, GiPocketBow, GiRunningShoe, GiHeartBeats, GiWeightLiftingUp, GiJigsawPiece, GiSheikahEye, GiPsychicWaves } from 'react-icons/gi';
import CharacterStats from '../../../../model/character-stats.model';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


interface IFadesripProps {
  stats: CharacterStats,
  editing?: {
    isEditing: boolean,
    updateStats: (stats: CharacterStats) => void
  }
}

export class FadesripDisplayComponent extends React.PureComponent<IFadesripProps> {

  updateStat = (e) => {
    e.preventDefault();
    const newStats = {
      ...this.props.stats,
      [e.target.name]: e.target.value
    }
    console.log(newStats);
    this.props.editing && this.props.editing.updateStats(newStats)
  }

  getStatAndBonus(statName: string, statValue: number) {
    const editing = this.props.editing;

    if (editing && editing.isEditing) {
      if (editing.updateStats) {
        return <>
          <input className="fadesrip-input"
            type="number"
            name={statName}
            defaultValue={'' + statValue}
            onBlur={this.updateStat} />
          <div>
            +{Math.floor(statValue * 3 / 10)}
          </div>
        </>
      }
    }
    return <>
      <div>
        {statValue}
      </div>
      <div>
        +{Math.floor(statValue * 3 / 10)}
      </div>
    </>
  }

  showStr: boolean;

  constructor(a, b) {
    super(a, b);
    this.showStr = false;
  }

  toggleStrTooltip() {
    this.showStr=!this.showStr;
  }

  public render() {
    const stats = this.props.stats;
    return (

      <div id="fadesrip-container">
        <div className="flex-col">
          <OverlayTrigger 
            key="str"
            overlay={() =>
              <Tooltip id="strTooltip" placement="top">
                My Tooltip
              </Tooltip>
            }>
            <GiMailedFist className="fadesrip-icon" />
            </OverlayTrigger>
          {this.getStatAndBonus('fighting', stats.fighting)}
        </div>
        <div className="flex-col" title="agility">
          <GiRunningShoe className="fadesrip-icon"/>
          {this.getStatAndBonus('agility', stats.agility)}
        </div>
        <div className="flex-col">
          <GiPocketBow className="fadesrip-icon" />
          {this.getStatAndBonus('dexterity', stats.dexterity)}
        </div>
        <div className="flex-col">
          <GiHeartBeats className="fadesrip-icon" />
          {this.getStatAndBonus('endurance', stats.endurance)}
        </div>
        <div className="flex-col">
          <GiWeightLiftingUp className="fadesrip-icon" />
          {this.getStatAndBonus('strength', stats.strength)}
        </div>
        <div className="flex-col">
          <GiJigsawPiece className="fadesrip-icon" />
          {this.getStatAndBonus('reason', stats.reason)}
        </div>
        <div className="flex-col">
          <GiPsychicWaves className="fadesrip-icon" />
          {this.getStatAndBonus('intuition', stats.intuition)}
        </div>
        <div className="flex-col">
          <GiSheikahEye className="fadesrip-icon" />
          {this.getStatAndBonus('psyche', stats.psyche)}
        </div>
      </div>
    );
  }
}

