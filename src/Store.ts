import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { state, IState } from './reducers';

const a: any = window;
const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(reduxThunk, logger),
  // other store enhancers if any
);

export const store: any = createStore(
  state,
  enhancer,
  applyMiddleware(reduxThunk)
);


