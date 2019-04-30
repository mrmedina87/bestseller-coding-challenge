import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import giftCards from './giftCards';

const rootReducer = combineReducers({
  form: formReducer,
  giftCards,
});

export default rootReducer;
