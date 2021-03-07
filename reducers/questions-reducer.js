import * as c from '../actions/ActionTypes';

export default (state = 0, action) => {
  switch(action.type) {
    case c.NEXT_QUESTION:
      let newState = state + 1
     return newState
    default:
      return state
  }
};
