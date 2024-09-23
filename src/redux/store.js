import { combineReducers, configureStore } from '@reduxjs/toolkit';
// ? CALL REDUCERS
import questionReducers from './question_reducers';
import { resultReducers } from './result_reducers';

const rootReducer = combineReducers({
  questions: questionReducers,
  result: resultReducers,
});

// ? CREATE STORE WITH REDUCER

export default configureStore({ reducer: rootReducer });
