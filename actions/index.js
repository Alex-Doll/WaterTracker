import { AsyncStorage } from 'react-native';
import {
  ADD_DAILY_WATER,
  RESET_DAILY_WATER,
  INITIALIZE_DAILY_WATER,
  SET_TODAYS_DATE,
} from '../constants/ActionTypes';

export const addDailyWater = (amtCups) => ({
  type: ADD_DAILY_WATER,
  amtCups,
});

export const resetDailyWater = () => ({
  type: RESET_DAILY_WATER,
});

export const initializeDailyWater = () => dispatch => {
  AsyncStorage.getItem(new Date().toLocaleDateString())
              .then(storedWaterAmt => dispatch({
                type: INITIALIZE_DAILY_WATER,
                payload: Number(storedWaterAmt),
              }));
};

export const setTodaysDate = () => ({
  type: SET_TODAYS_DATE,
});
