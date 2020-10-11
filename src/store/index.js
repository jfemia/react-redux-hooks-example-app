import { combineReducers, createStore } from 'redux';
import todo from './todo';

const reducers = { todo };
export default createStore(combineReducers(reducers));