import { ADD_TODO } from '../constants';

export const addTodo = payload => ({
  type: ADD_TODO,
  payload,
});

export default addTodo;
