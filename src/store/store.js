import {
  createStore,
} from 'redux';
// Add reducer
import { reducers }  from '../reducers/index'

// Configure store function
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
};

// Call createStore when you app initialize from index.js
export const store = configureStore();