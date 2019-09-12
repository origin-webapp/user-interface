import { toggleModal, updateNewCharacter, saveCharacter } from '../../../actions/create-character/create-character.actions';
import { IState, ICreateCharacterState, IAuthState } from '../../../reducers';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { CreateCharacterModal } from './create-character-modal.component';

export interface ICreateCharacterModal {
  toggleModal,
  createCharacter: ICreateCharacterState,
  saveCharacter,
  updateNewCharacter,
  authState: IAuthState
}

const mapStateToProps = (state:IState) => ({
  createCharacter: state.createCharacter,
  authState: state.auth
});

const mapDispatchToProps = {
  saveCharacter,
  toggleModal,
  updateNewCharacter,
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateCharacterModal);