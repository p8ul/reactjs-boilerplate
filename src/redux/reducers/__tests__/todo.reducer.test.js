import todo from '../todo';

const todos = { name: 'article', id: 1 };
describe('Article reducers', () => {
  it('should provide the initial state', () => {
    expect(todo(undefined, {})).toEqual({});
  });

  it('should add articles to the state', () => {
    expect(todo(todos, {})).toEqual(todos);
  });
});