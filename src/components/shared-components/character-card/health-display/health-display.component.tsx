import * as React from 'react';

import { Col, Popover, PopoverBody, Row } from 'reactstrap';
import PopoverHeader from 'reactstrap/lib/PopoverHeader';
import Character from '../../../../model/character.model';


interface IState {
    currentHealth: number,
    showHealthTooltip: boolean
}

interface IHealthProps {
    character: Character,
    inCampaign: false
}

export class HealthDisplayComponent extends React.PureComponent<IHealthProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            currentHealth: this.getMaxHealth(),
            showHealthTooltip: false
        }
    }

    getMaxHealth(): number {
        let maxHealth = 0;
        maxHealth += this.props.character.stats.fighting;
        maxHealth += this.props.character.stats.agility;
        maxHealth += this.props.character.stats.dexterity;
        maxHealth += 3 * this.props.character.stats.endurance;
        maxHealth += this.props.character.stats.strength;
        return maxHealth;
    }

    public render() {
        const maxHealth = this.getMaxHealth;
        return (
            <>
                <div id="health-container">
                    { this.getMaxHealth() }
                </div>
                <Popover placement="top" isOpen={this.state.showHealthTooltip} target={`health-container`}>
                    <PopoverHeader>Health Points</PopoverHeader>
                    <PopoverBody>
                        <Row>
                            <Col>
                                Explination
                            </Col>
                        </Row>
                    </PopoverBody>
                </Popover>
            </>
        );
    }
}

