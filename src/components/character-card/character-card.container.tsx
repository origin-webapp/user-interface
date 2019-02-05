import { IState } from "../../reducers";
import { connect } from "react-redux";
import { CharacterCardComponent } from "./character-card.component";
import { refreshMyCharactersList } from "src/actions/my-characters/my-characters.actions";


const mapStateToProps = (state: IState) => ({
  myCharacters: state.myCharacters
})

const mapDispatchToProps = {
  refreshMyCharactersList
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCardComponent);