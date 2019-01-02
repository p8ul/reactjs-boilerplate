import { ADD_TODO } from '../../constants';
import { addTodo } from '..';

describe('Article action creators', () => {
  it('Should dispatch ADD_ARTICLE type', () => {
    expect(addTodo({}).type).toEqual(ADD_TODO);
  });
});
