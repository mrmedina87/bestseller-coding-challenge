import axios from 'axios';
import {reset} from 'redux-form';

import * as types from './types';
import {
  URL_API,
} from '../constants';

// sets

export const setApplyingGiftCard = (isApplying) => {
  return {
    type: types.SET_IS_APPLYING,
    isApplying,
  };
};

export const addGiftCard = (item) => {
  return {
    type: types.ADD_GIFTCARD,
    item,
  };
};

export const setErrorMsg = (msg) => {
  return {
    type: types.SET_ERROR_MSG,
    msg,
  };
};

// requests

export const applyGiftCard = () => {
  return (dispatch, getState) => {
    const {
      giftCardNumber,
      controlCode,
    } = getState().form.addGC.values;
    dispatch(setApplyingGiftCard(true));
    dispatch(setErrorMsg(''));

    return axios.get(`${URL_API}/gift-cards?number=${giftCardNumber}&ctrlCode=${controlCode}&applied=false`)
      .then(response => {
        const matches = response.data;
        if (matches.length > 0) {
          dispatch(reset('addGC'));
          dispatch(addGiftCard({
            giftCardNumber,
            controlCode,
            discount: matches[0].discount,
            id: matches[0].id,
          }));
        } else {
          dispatch(setErrorMsg('Gift card could not ve verified, please check the numbers'));
        }
        dispatch(setApplyingGiftCard(false));
      })
      .catch(error => {
        dispatch(setErrorMsg('Something went wrong while trying to apply your gift card'));
        dispatch(setApplyingGiftCard(false));
      });
  };
};