// import cars from '../../assets/data/cars';
import { FETCH_CARS, FETCH_CAR } from '../actions/index';

function carsReducer (state = [], action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case FETCH_CARS: {
      return action.payload;
    }
    case FETCH_CAR: {
      return [action.payload];
    }
    default:
      return state;
  }
};

export default carsReducer;
