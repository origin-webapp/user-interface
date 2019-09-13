import { IPowerMechanicsState } from '.';
import { authTypes } from '../actions/auth/auth.actions';
import { powerMechanicsTypes } from '../actions/power-mechanics/power-mechanics.actions';

const initialState: IPowerMechanicsState = {
  powerMechanics: []
}

export const powerMechanicsReducer = (state = initialState, action: any): IPowerMechanicsState => {
  switch (action.type) {
    case powerMechanicsTypes.loadAll:
      return {
        ...state,
        powerMechanics: action.payload.powerMechanics
      }
    case authTypes.LOGOUT:
      return initialState;
  }
  return state;
}
