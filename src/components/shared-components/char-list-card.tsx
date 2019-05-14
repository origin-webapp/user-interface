import * as React from 'react';
import { IMyCharactersState } from '../../reducers';

interface IProps {
    myCharacters: IMyCharactersState,
    setCurrentCharacterId: (CharacterId: number) => void
}

export class CharacterListCardComponent extends React.PureComponent<IProps, any> {

    public render() {
        return (
            <div id="character-list-card" className="card text-center">
                <div className="card-header character-card-name-bar">
                    Character List
                </div>
                <div className="card-body">
                    <ul className="list-group"> {
                        this.props.myCharacters.characters.map((item, key) => 
                        <li>
                            <a className="card-link"
                            onClick = {() => {console.log(`hi`); return this.props.setCurrentCharacterId(item.id)}}>
                            {item.name}
                            </a>
                        </li>)
                    } </ul>
                </div>
            </div>
        );
    }

}