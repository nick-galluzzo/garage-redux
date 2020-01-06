import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import garageReducer from './garageReducer';
import carsReducer from './carsReducer';

const rootReducer = combineReducers({
  garage: garageReducer,
  cars: carsReducer,
  form: formReducer
});

export default rootReducer;
