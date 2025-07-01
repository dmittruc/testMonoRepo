import {combineReducers} from '@reduxjs/toolkit';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
