import { AsyncStorage } from 'react-native';
import {
  ADD_DAILY_WATER,
  RESET_DAILY_WATER,
  INITIALIZE_DAILY_WATER,
  SET_TODAYS_DATE,
} from '../constants/ActionTypes';

const dailyWaterInitialState = {
  current: 0,
  goal: 8,
};

function setAsyncStorage(key, value) {
  AsyncStorage.setItem(key, String(value))
              .catch(error => {
                console.log(error);
              });

  return;
}

export const dailyWater = (state = dailyWaterInitialState, action) => {
  switch(action.type) {
    case ADD_DAILY_WATER:
      const newWaterAmt = state.current + action.amtCups;
      setAsyncStorage(new Date().toLocaleDateString(), newWaterAmt);
      return {
        ...state,
        current: newWaterAmt,
      };
    case RESET_DAILY_WATER:
      const resetWaterAmt = 0;
      setAsyncStorage(new Date().toLocaleDateString(), resetWaterAmt);
      return {
        ...state,
        current: resetWaterAmt,
      };
    case INITIALIZE_DAILY_WATER:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  };
};
