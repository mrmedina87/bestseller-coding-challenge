import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore () {

  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  return createStore(
    rootReducer,
    // composeEnhancers(applyMiddleware(thunkMiddleware)),
    applyMiddleware(thunkMiddleware),
  );
};