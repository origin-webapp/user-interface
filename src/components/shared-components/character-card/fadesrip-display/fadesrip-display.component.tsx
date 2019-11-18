import * as React from 'react';

import { Col, Popover, PopoverBody, Row } from 'reactstrap';
import PopoverHeader from 'reactstrap/lib/PopoverHeader';
import { GiMailedFist, GiPocketBow, GiRunningShoe, GiHeartBeats, GiWeightLiftingUp, GiJigsawPiece, GiSheikahEye, GiPsychicWaves } from 'react-icons/gi';
import CharacterStats from '../../../../model/character-stats.model';


interface IState {
  showTooltip: Tooltips
}

interface IFadesripProps {
  stats: CharacterStats,
  editing?: {
    isEditing: boolean,
    updateStats: (stats: CharacterStats) => void
  }
}

interface Tooltips {
  str: boolean,
  agl: boolean,
  dex: boolean,
  end: boolean,
  fht: boolean,
  rsn: boolean,
  int: boolean,
  psy: boolean

}

export class FadesripDisplayComponent extends React.PureComponent<IFadesripProps, IState> {

  constructor(props) {
    super(props);
    this.state = {
      showTooltip: {
        str: false,
        agl: false,
        dex: false,
        end: false,
        fht: false,
        rsn: false,
        int: false,
        psy: false
      }
    }
  }

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

  toggleShowTooltip = (attribute: string) => {
    let newShowTooltip = {...this.state.showTooltip};
    newShowTooltip[attribute] = true;
    this.setState({
      showTooltip: newShowTooltip
    })
  }

  closeTooltip = (attribute: string) => {
    let newShowTooltip = {...this.state.showTooltip};
    newShowTooltip[attribute] = false;
    this.setState({
      showTooltip: newShowTooltip
    })
  }

  public render() {
    const stats = this.props.stats;
    return (

      <div id="fadesrip-container">
        <div className="flex-col" title="strength" onMouseOver={() => this.toggleShowTooltip("fht")} onMouseOut={() => this.closeTooltip("fht")}>
            <GiMailedFist className="fadesrip-icon" id={'fhtIcon'+stats.id} />
          {this.getStatAndBonus('fighting', stats.fighting)}
        </div>
        <div className="flex-col" title="agility" onMouseOver={() => this.toggleShowTooltip("agl")} onMouseOut={() => this.closeTooltip("agl")}>
          <GiRunningShoe className="fadesrip-icon" id={`aglIcon`+ stats.id}/>
          {this.getStatAndBonus('agility', stats.agility)}
        </div>
        <div className="flex-col" onMouseOver={() => this.toggleShowTooltip("dex")} onMouseOut={() => this.closeTooltip("dex")}>
          <GiPocketBow className="fadesrip-icon" id={`dexIcon`+ stats.id}/>
          {this.getStatAndBonus('dexterity', stats.dexterity)}
        </div>
        <div className="flex-col" onMouseOver={() => this.toggleShowTooltip("end")} onMouseOut={() => this.closeTooltip("end")}>
          <GiHeartBeats className="fadesrip-icon" id={`endIcon`+ stats.id}/>
          {this.getStatAndBonus('endurance', stats.endurance)}
        </div>
        <div className="flex-col" onMouseOver={() => this.toggleShowTooltip("str")} onMouseOut={() => this.closeTooltip("str")}>
          <GiWeightLiftingUp className="fadesrip-icon" id={`strIcon`+ stats.id}/>
          {this.getStatAndBonus('strength', stats.strength)}
        </div>
        <div className="flex-col" onMouseOver={() => this.toggleShowTooltip("rsn")} onMouseOut={() => this.closeTooltip("rsn")}>
          <GiJigsawPiece className="fadesrip-icon" id={`rsnIcon`+ stats.id}/>
          {this.getStatAndBonus('reason', stats.reason)}
        </div>
        <div className="flex-col" onMouseOver={() => this.toggleShowTooltip("int")} onMouseOut={() => this.closeTooltip("int")}>
          <GiPsychicWaves className="fadesrip-icon" id={`intIcon`+ stats.id}/>
          {this.getStatAndBonus('intuition', stats.intuition)}
        </div>
        <div className="flex-col" onMouseOver={() => this.toggleShowTooltip("psy")} onMouseOut={() => this.closeTooltip("psy")}>
          <GiSheikahEye className="fadesrip-icon" id={`psyIcon`+ stats.id}/>
          {this.getStatAndBonus('psyche', stats.psyche)}
        </div>
        <Popover placement="top" isOpen={this.state.showTooltip.str} target={`strIcon`+ stats.id}>
          <PopoverHeader>Strength</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col>
                Explination
              </Col>
            </Row>
          </PopoverBody>
        </Popover>
        <Popover placement="top" isOpen={this.state.showTooltip.fht} target={`fhtIcon`+ stats.id}>
          <PopoverHeader>Fighting</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col>
                Explination
              </Col>
            </Row>
          </PopoverBody>
        </Popover>
        <Popover placement="top" isOpen={this.state.showTooltip.agl} target={`aglIcon`+ stats.id}>
          <PopoverHeader>Agility</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col>
                Explination
              </Col>
            </Row>
          </PopoverBody>
        </Popover>
        <Popover placement="top" isOpen={this.state.showTooltip.dex} target={`dexIcon`+ stats.id}>
          <PopoverHeader>Dexterity</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col>
                Explination
              </Col>
            </Row>
          </PopoverBody>
        </Popover>
        <Popover placement="top" isOpen={this.state.showTooltip.rsn} target={`rsnIcon`+ stats.id}>
          <PopoverHeader>Reason</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col>
                Explination
              </Col>
            </Row>
          </PopoverBody>
        </Popover>
        <Popover placement="top" isOpen={this.state.showTooltip.int} target={`intIcon`+ stats.id}>
          <PopoverHeader>Intuition</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col>
                Explination
              </Col>
            </Row>
          </PopoverBody>
        </Popover>
        <Popover placement="top" isOpen={this.state.showTooltip.psy} target={`psyIcon`+ stats.id}>
          <PopoverHeader>Psyche</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col>
                Explination
              </Col>
            </Row>
          </PopoverBody>
        </Popover>
        <Popover placement="top" isOpen={this.state.showTooltip.end} target={`endIcon`+ stats.id}>
          <PopoverHeader>Endurance</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col>
                Explination
              </Col>
            </Row>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

