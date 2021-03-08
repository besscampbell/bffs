import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { type, id, response, question } = action;
  switch(type){
    case c.SELECT_RESPONSE:
      return {
        response,
        question,
        id,
      }
    default:
      return state;
  }
}