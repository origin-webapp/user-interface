import { connect } from "react-redux";
import { addPower, updateStats, deletePower, updatePower, updateCharacter, createCharacter, deleteCharacter } from '../../actions/characters/characters.actions';
import { refreshMyCharactersList, setCurrentCharacterId, toggleIsEditing } from "../../actions/my-characters/my-characters.actions";
import { IState } from "../../reducers";
import { HomeComponent } from "./home.component";


const mapStateToProps = (state: IState) => ({
  currentUsername: state.auth.currentUser.username,
  myCharacters: state.myCharacters,
  powerMechanics: state.powerMechanics
})

const mapDispatchToProps = {
  refreshMyCharactersList,
  toggleIsEditing,
  updateStats,
  setCurrentCharacterId,
  addPower,
  updatePower,
  deletePower,
  updateCharacter,
  createCharacter,
  deleteCharacter
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);