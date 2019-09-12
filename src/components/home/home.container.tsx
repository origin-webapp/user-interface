import { IState } from "../../reducers";
import { connect } from "react-redux";
import { refreshMyCharactersList, toggleIsEditing, updateStats } from "../../actions/my-characters/my-characters.actions";
import { HomeComponent } from "./home.component";
import * as createCharacterActions from '../../actions/create-character/create-character.actions';


const mapStateToProps = (state: IState) => ({
  currentUsername: state.auth.currentUser.username,
  myCharacters: state.myCharacters
})

const mapDispatchToProps = {
  refreshMyCharactersList,
  toggleIsEditing,
  updateStats,
  toggleCreateCharacterModal: createCharacterActions.toggleModal
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);