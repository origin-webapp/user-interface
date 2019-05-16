import * as React from 'react';
import CharacterStats from '../../model/character-stats.model';
import { IMyCharactersState, IPowerMechanicsState } from '../../reducers';
import { CharacterListCardComponent } from '../shared-components/char-list-card';
import { CharacterCardComponent } from '../shared-components/character-card/character-card.component';
import { Power } from '../../model/power.model';


export interface IHomeProps {
  currentUsername: string,
  myCharacters: IMyCharactersState,
  powerMechanics: IPowerMechanicsState
  refreshMyCharactersList: (username: string) => void,
  toggleIsEditing: (isEditing: boolean) => void,
  updateStats: (stats: CharacterStats) => void,
  setCurrentCharacterId: (characterId: number) => void,
  addPower: (power: Power) => void,
  updatePower: (power: Partial<Power>) => void,
  deletePower: (powerId: number) => void
}


export class HomeComponent extends React.Component<IHomeProps> {

  public componentDidMount() {
    this.props.setCurrentCharacterId(this.props.myCharacters.characters[0].id);
  }

  public render() {
    const { toggleIsEditing, updateStats, addPower, updatePower, deletePower, powerMechanics } = this.props;
    const characterList = this.props.myCharacters;
    const isEditing = this.props.myCharacters.isEditing;
    const setCharacter = this.props.setCurrentCharacterId;
    const currentCharacter = characterList.characters.find(c => c.id === characterList.currentCharacterId);
    console.log(currentCharacter);
    if (currentCharacter) {
      return (
        <div id="home-container" className="card-columns d-flex justify-content-center">
          <CharacterListCardComponent myCharacters={characterList} setCurrentCharacterId={setCharacter} />
          <CharacterCardComponent
            character={currentCharacter}
            editing={{ isEditing, toggleIsEditing, updateStats, addPower, updatePower, deletePower, powerMechanics: powerMechanics.powerMechanics }} />
        </div>
      );
    } else {
      return null;
    }

  }
}

