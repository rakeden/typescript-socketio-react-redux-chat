import { combineReducers } from 'redux';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  messages: chatReducer
});

export default rootReducer;