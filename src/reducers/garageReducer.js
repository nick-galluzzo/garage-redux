export const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;

function garageReducer(state = garageName, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    default:
      return state;
  }
}

export default garageReducer;
