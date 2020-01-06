// TODO: add and export your own actions
export const FETCH_CARS = "FETCH_CARS";
export const FETCH_CAR = "FETCH_CAR";
export const ADD_CAR = "ADD_CAR";
export const REMOVE_CAR = "REMOVE_CAR";

export const fetchCars = (garage) => {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
};

export const addCar = (garage, car, callback) => {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  }).then(response => response.json())
    .then(callback);

  return {
    type: ADD_CAR,
    payload: request
  };
};

export const fetchCar = (id) => {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${id}`;
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
};

export const removeCar = (car, callback) => {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${car.id}`;
  fetch(url, { method: 'DELETE' })
   .then(response => response.json())
   .then(callback);

  return {
    type: REMOVE_CAR,
    payload: car
  };
};
