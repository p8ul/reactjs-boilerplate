import { ADD_TODO } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return action.payload;
    default:
      return state;
  }
};
