import { combineReducers } from 'redux';
import garageReducer from './garageReducer';
import carsReducer from './carsReducer';

const rootReducer = combineReducers({
  garage: garageReducer,
  cars: carsReducer
});

export default rootReducer;
