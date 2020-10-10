import { combineReducers, createStore } from 'redux';
import todos from './todo';

const reducers = { todos };

export default createStore(combineReducers(reducers));