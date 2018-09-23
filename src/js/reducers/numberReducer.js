export const numberReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return {...state, count: state.count + action.payload};
    default:
      return state;
  }
};
