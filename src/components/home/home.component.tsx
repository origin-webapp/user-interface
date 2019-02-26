import * as React from 'react';
import { CharacterCardComponent } from '../shared-components/character-card/character-card.component';
import { IMyCharactersState } from '../../reducers';
import { updateStats, setCurrentCharacterId } from '../../actions/my-characters/my-characters.actions';
import CharacterStats from '../../model/character-stats.model';
import { CharacterListCardComponent } from '../shared-components/char-list-card';
import Character from '../../model/character.model';


export interface IHomeProps {
  currentUsername: string,
  myCharacters: IMyCharactersState,
  refreshMyCharactersList: (username: string) => void,
  toggleIsEditing: (isEditing: boolean) => void,
  updateStats: (stats: CharacterStats) => void,
  setCurrentCharacterId: (characterId: number) => void
}


export class HomeComponent extends React.Component<IHomeProps> {

  public componentDidMount() {
    this.props.setCurrentCharacterId(this.props.myCharacters.characters[0].id);
  }

  public render() {
    const { toggleIsEditing, updateStats } = this.props;
    const characterList = this.props.myCharacters;
    const isEditing = this.props.myCharacters.isEditing;
    const setCharacter = this.props.setCurrentCharacterId;
    const currentCharacter = characterList.characters.find(c => c.id === characterList.currentCharacterId);
    console.log(currentCharacter);
    if (currentCharacter) {
      return (
        <div className="card-columns d-flex justify-content-center">
          <CharacterListCardComponent myCharacters={characterList} setCurrentCharacterId={setCharacter} />
          <CharacterCardComponent
            character={currentCharacter}
            editing={{ isEditing, toggleIsEditing, updateStats }} />
        </div>
      );
    } else {
      return null;
    }

  }
}

