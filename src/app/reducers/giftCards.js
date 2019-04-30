import * as types from '../actions/types';

const giftCards = (
  state = {
    list: [],
    isApplying: false,
    errorMsg: '',
  },
  action,
) => {
  if (!action) {
    debugger;
  }
  switch (action.type) {
    case types.ADD_GIFTCARD:
      return Object.assign({}, state, {
        list: [...state.list, action.item],
      });
    case types.SET_IS_APPLYING:
      return Object.assign({}, state, {
        isApplying: action.isApplying,
      });
    case types.SET_ERROR_MSG:
      return Object.assign({}, state, {
        errorMsg: action.msg,
      });
    default:
      return state;
  }
};

export default giftCards;