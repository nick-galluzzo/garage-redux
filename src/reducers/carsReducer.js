import cars from '../../assets/data/cars';

const carsReducer = (state = cars, action) => {
  if (state === null) {
    return [];
  }

  switch (action.type) {
    default:
      return state;
  }
};

export default carsReducer;
