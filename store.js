import { createStore, combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';


const ADD_DAILY_WATER = 'ADD_DAILY_WATER';
const RESET_DAILY_WATER = 'RESET_DAILY_WATER';
const SET_TODAYS_DATE = 'SET_TODAYS_DATE';

export const addDailyWater = (amtCups) => ({
  type: ADD_DAILY_WATER,
  amtCups,
});

export const resetDailyWater = () => ({
  type: RESET_DAILY_WATER,
});

export const setTodaysDate = () => ({
  type: SET_TODAYS_DATE,
});

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

const dailyWater = (state = dailyWaterInitialState, action) => {
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
    default:
      return state;
  };
};

const today = (state = null, action) => {
  switch(action.type) {
    case SET_TODAYS_DATE:
      return new Date().toLocaleDateString();
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dailyWater,
  today,
});

export const store = createStore(rootReducer);
