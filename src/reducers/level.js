
const levelReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_LEVEL": {
      return action.value
    }
    default:
      return state;
  }
};

export default levelReducer
