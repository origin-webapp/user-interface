import { IState } from "../../reducers";
import { connect } from "react-redux";
import { refreshMyCharactersList, toggleIsEditing, updateStats } from "../../actions/my-characters/my-characters.actions";
import { HomeComponent } from "./home.component";


const mapStateToProps = (state: IState) => ({
  myCharacters: state.myCharacters
})

const mapDispatchToProps = {
  refreshMyCharactersList,
  toggleIsEditing,
  updateStats
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);