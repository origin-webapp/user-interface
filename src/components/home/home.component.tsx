import * as React from 'react';
import { CharacterCardComponent } from '../shared-components/character-card/character-card.component';
import { IMyCharactersState } from '../../reducers';
import { updateStats } from '../../actions/my-characters/my-characters.actions';
import CharacterStats from '../../model/character-stats.model';


export interface IHomeProps {
  currentUsername: string,
  myCharacters: IMyCharactersState,
  refreshMyCharactersList: (username: string) => void,
  toggleIsEditing: (isEditing: boolean) => void,
  updateStats: (stats: CharacterStats) => void
}


export class HomeComponent extends React.Component<IHomeProps> {

  public render() {
    const {toggleIsEditing, updateStats} = this.props;
    const character = this.props.myCharacters.characters[0];
    const isEditing = this.props.myCharacters.isEditing;
    if (character) {
      return (
        <CharacterCardComponent 
          character={character} 
          editing={{isEditing, toggleIsEditing, updateStats}} />
      );
    } else {
      return null;
    }
    
  }
}

