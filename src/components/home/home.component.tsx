import * as React from 'react';
import CharacterStats from '../../model/character-stats.model';
import  CreateCharacterModal  from '../shared-components/create-character-modal/create-character-modal.container';
import Character from '../../model/character.model';
import { Power } from '../../model/power.model';
import { IMyCharactersState, IPowerMechanicsState, IAuthState } from '../../reducers';
import { CharacterListCardComponent } from '../shared-components/char-list-card';
import { CharacterCardComponent } from '../shared-components/character-card/character-card.component';
import { deleteCharacter } from '../../actions/characters/characters.actions';


export interface IHomeProps {
  currentUsername: string,
  myCharacters: IMyCharactersState,
  powerMechanics: IPowerMechanicsState,
  auth: IAuthState,
  refreshMyCharactersList: (username: string) => void,
  toggleIsEditing: (isEditing: boolean) => void,
  updateStats: (stats: CharacterStats) => void,
  toggleCreateCharacterModal: (creator: string) => void;
  setCurrentCharacterId: (characterId: number) => void,
  addPower: (power: Power) => void,
  updatePower: (power: Partial<Power>) => void,
  deletePower: (powerId: number) => void,
  updateCharacter: (character: Partial<Character>) => void,
  createCharacter: (character?: Partial<Character>) => void,
  deleteCharacter: (characterId: number) => void
}


export class HomeComponent extends React.Component<IHomeProps> {

  public componentDidMount() {
    this.props.setCurrentCharacterId(this.props.myCharacters.characters[0].id);
  }

  public render() {
    const character = this.props.myCharacters.characters[0];
    const { auth, toggleIsEditing, updateStats, addPower, updatePower, deletePower, deleteCharacter, powerMechanics, updateCharacter, createCharacter } = this.props;
    const characterList = this.props.myCharacters;
    const isEditing = this.props.myCharacters.isEditing;
    const setCharacter = this.props.setCurrentCharacterId;
    const currentCharacter = characterList.characters.find(c => c.id === characterList.currentCharacterId);
    console.log(currentCharacter);
    if (currentCharacter) {
      return (

        <div id="home-container" className="card-columns d-flex justify-content-center">
          <CharacterListCardComponent myCharacters={characterList}
            setCurrentCharacterId={setCharacter}
            createCharacter={createCharacter}
            toggleCreateCharacter={this.props.toggleCreateCharacterModal}
            auth={auth} />
          <CharacterCardComponent
            character={currentCharacter}
            editing={{
              isEditing, toggleIsEditing, updateStats, addPower, updatePower, deletePower,
              powerMechanics: powerMechanics.powerMechanics, updateCharacter, deleteCharacter
            }} />
        </div>
      );
    } else {
      return (
        <div className="Jumbotron">
          <h1 className="display-4">Welcome to Origin!</h1>
          <p className="lead">{"You must be new here, because we didn't find a character for you ;<{|"}</p>
          <hr className="my-4"/>
            <p>Please start by clicking the button bellow to create your first Origin Character.  How exciting!!</p>
            <p className="lead">
              <button className="btn btn-primary btn-lg" onClick={() => this.props.toggleCreateCharacterModal(auth.currentUser.username)} role="button">Create Character</button>
            </p>
        </div>
          );
        }
      }
    }

