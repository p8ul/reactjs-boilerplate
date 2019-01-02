import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import allReducers from '../reducers';

const logger = createLogger();
export const store = createStore(allReducers, applyMiddleware(logger));
export default store;
