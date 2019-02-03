import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // allows simple asynchronous use of dispatch
import rootReducer from '../reducers';

// Middleware in redux is mostly used to allow dispatching async actions
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
