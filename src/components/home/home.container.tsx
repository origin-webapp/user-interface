import { connect } from "react-redux";
import { addPower, updateStats, deletePower } from '../../actions/characters/characters.actions';
import { refreshMyCharactersList, setCurrentCharacterId, toggleIsEditing } from "../../actions/my-characters/my-characters.actions";
import { IState } from "../../reducers";
import { HomeComponent } from "./home.component";


const mapStateToProps = (state: IState) => ({
  currentUsername: state.auth.currentUser.username,
  myCharacters: state.myCharacters
})

const mapDispatchToProps = {
  refreshMyCharactersList,
  toggleIsEditing,
  updateStats,
  setCurrentCharacterId,
  addPower,
  deletePower
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);