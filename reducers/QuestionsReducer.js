import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import * as c from '../actions/ActionTypes';

const QuestionsReducer = (state = 0, action) => {
  switch(action.type) {
    case c.NEXT_QUESTION:
      let newState = state + 1
     return newState
    default:
      return state
  }
};

export default combineReducers({
  question: QuestionsReducer,
  firestore: firestoreReducer
});