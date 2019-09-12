import * as React from 'react';
import { CharacterCardComponent } from '../shared-components/character-card/character-card.component';
import { IMyCharactersState } from '../../reducers';
import { updateStats } from '../../actions/my-characters/my-characters.actions';
import CharacterStats from '../../model/character-stats.model';
import  CreateCharacterModal  from '../shared-components/create-character-modal/create-character-modal.container';


export interface IHomeProps {
  currentUsername: string,
  myCharacters: IMyCharactersState,
  refreshMyCharactersList: (username: string) => void,
  toggleIsEditing: (isEditing: boolean) => void,
  updateStats: (stats: CharacterStats) => void,
  toggleCreateCharacterModal: () => void;
}


export class HomeComponent extends React.Component<IHomeProps> {

  public render() {
    const { toggleIsEditing, updateStats } = this.props;
    const character = this.props.myCharacters.characters[0];
    const isEditing = this.props.myCharacters.isEditing;
    if (character) {
      return (
        <CharacterCardComponent
          character={character}
          editing={{ isEditing, toggleIsEditing, updateStats }} />
      );
    } else {
      return (
        <div className="Jumbotron">
          <h1 className="display-4">Welcome to Origin!</h1>
          <p className="lead">{"You must be new here, because we didn't find a character for you ;<{|"}</p>
          <hr className="my-4"/>
            <p>Please start by clicking the button bellow to create your first Origin Character.  How exciting!!</p>
            <p className="lead">
              <button className="btn btn-primary btn-lg" onClick={this.props.toggleCreateCharacterModal} role="button">Create Character</button>
            </p>
            <CreateCharacterModal />
        </div>
          );
        }
    
      }
    }
    
