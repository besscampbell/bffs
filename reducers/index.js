import questionsReducer from './questions-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  questions: questionsReducer,
  firestore: firestoreReducer,
});

export default rootReducer;