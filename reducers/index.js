import { combineReducers } from 'redux';
import { dailyWater } from './dailyWater';
import { SET_TODAYS_DATE } from '../constants/ActionTypes';

const today = (state = null, action) => {
  switch(action.type) {
    case SET_TODAYS_DATE:
      return new Date().toLocaleDateString();
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  dailyWater,
  today,
});
