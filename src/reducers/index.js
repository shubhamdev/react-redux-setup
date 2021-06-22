import {
    combineReducers
  } from 'redux';
import {addTodo} from './reducers';
import {childReducer} from './childReducer'


// Combine reducer 
export const reducers = combineReducers({
    addTodo,childReducer
});