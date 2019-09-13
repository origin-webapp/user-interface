import * as React from 'react';
import { IMyCharactersState, IAuthState } from '../../reducers';
import { FaUserPlus } from 'react-icons/fa';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Character from '../../model/character.model';

interface IProps {
  myCharacters: IMyCharactersState,
  auth: IAuthState,
  setCurrentCharacterId: (CharacterId: number) => void,
  createCharacter: (character?: Partial<Character>) => void,
  toggleCreateCharacter: (creator: string) => void
}

export class CharacterListCardComponent extends React.Component<IProps, any> {

  public render() {
    return (
      <div id="character-list-card" className="card text-center">
        <div className="card-header character-card-name-bar">
          <Row>
            <Col>Characters</Col>
            <Col>  
              <FaUserPlus className="cursor-hover" onClick={() => this.props.toggleCreateCharacter(this.props.auth.currentUser.username)}/>
            </Col>
          </Row>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {
              this.props.myCharacters.characters.map((character) =>
                <li key={'character-list' + character.id} className="list-group-item" onClick={() => this.props.setCurrentCharacterId(character.id)}>
                  <a className="card-link">
                    {character.name}
                  </a>
                </li>)
            }
          </ul>
        </div>
      </div>
    );
  }

}