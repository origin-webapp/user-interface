import * as React from 'react';
import { CharacterCardComponent } from '../shared-components/character-card/character-card.component';
import { IMyCharactersState } from 'src/reducers';


export interface IHomeProps {
  myCharacters: IMyCharactersState,
  refreshMyCharactersList: (email: string) => void
}


export class HomeComponent extends React.Component<IHomeProps> {

  componentDidMount() {
    this.props.refreshMyCharactersList('btkruppa513@gmail.com');
  }

  public render() {
    const character = this.props.myCharacters.characters[0];
    if (character) {
      return (
        <CharacterCardComponent character={character} />
      );
    } else {
      return null;
    }
    
  }
}

