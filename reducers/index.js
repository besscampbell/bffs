import questionsReducer from './questions-reducer';
import selectedResponseReducer from './selected-response-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  questions: questionsReducer,
  selectedResponse: selectedResponseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;