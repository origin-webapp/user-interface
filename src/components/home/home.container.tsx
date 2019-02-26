import { IState } from "../../reducers";
import { connect } from "react-redux";
import { refreshMyCharactersList, toggleIsEditing, updateStats, setCurrentCharacterId } from "../../actions/my-characters/my-characters.actions";
import { HomeComponent } from "./home.component";
import { stat } from "fs-extra";


const mapStateToProps = (state: IState) => ({
  currentUsername: state.auth.currentUser.username,
  myCharacters: state.myCharacters
})

const mapDispatchToProps = {
  refreshMyCharactersList,
  toggleIsEditing,
  updateStats,
  setCurrentCharacterId
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);