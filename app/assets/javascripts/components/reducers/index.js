import { combineReducers } from 'redux';
import counter from './counter';

// combines all reducers into one main reducer
const rootReducer = combineReducers({
  counter
});

export default rootReducer;
