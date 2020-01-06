const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;

const garageReducer = (state = garageName, action) => {
  if (state === null) {
    return [];
  }

  switch (action.type) {
    default:
      return state;
  }
};

export default garageReducer;
