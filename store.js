import { createStore, combineReducers } from 'redux';


const ADD_DAILY_WATER = 'ADD_DAILY_WATER';
const RESET_DAILY_WATER = 'RESET_DAILY_WATER';

export const addDailyWater = () => ({
  type: ADD_DAILY_WATER,
});

export const resetDailyWater = () => ({
  type: RESET_DAILY_WATER,
});

const dailyWaterInitialState = {
  current: 0,
  goal: 8,
};

const dailyWater = (state = dailyWaterInitialState, action) => {
  switch(action.type) {
    case ADD_DAILY_WATER:
      return {
        ...state,
        current: state.current + 1,
      };
    case RESET_DAILY_WATER:
      return {
        ...state,
        current: 0,
      };
    default:
      console.log(state);
      return state;
  };
};

const rootReducer = combineReducers({
  dailyWater,
});

export const store = createStore(rootReducer);
